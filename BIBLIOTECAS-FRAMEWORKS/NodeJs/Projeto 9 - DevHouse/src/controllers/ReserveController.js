import Reserve from '../models/Reserve';
import User from '../models/User';
import House from '../models/House';

class ReserveController {
  async index(req, res) {
    const { user_id } = req.headers;
    const reserves = await Reserve.find({ user: user_id }).populate('house');

    return res.json(reserves);
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById(house_id);

    if (!house) {
      return res.status(400).json({ error: 'House not found' });
    }

    if (house.status !== 'true') {
      return res.status(400).json({ error: 'House not available' });
    }

    const user = await User.findById(user_id);

    if (String(user._id) === String(house.user)) {
      return res
        .status(401)
        .json({ error: 'User cannot reserve his own house' });
    }

    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    const populatedReserve = await Reserve.findById(reserve._id)
      .populate('house')
      .populate('user');

    return res.json(populatedReserve);
  }

  async destroy(req, res) {
    const { reserve_id } = req.body;

    const reserve = await Reserve.findByIdAndDelete({ _id: reserve_id });

    return res.json({ mensage: 'Reserve deleted' }, reserve);
  }
}

export default new ReserveController();

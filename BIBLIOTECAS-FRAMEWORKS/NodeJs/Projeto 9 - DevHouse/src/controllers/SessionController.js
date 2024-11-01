import User from "../models/User";
import * as Yup from "yup";

class SessionController{
     async store(req, res){
        const shema = Yup.object().shape({
            email: Yup.string().email().required(),
        })
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if(!(await shema.isValid(req.body))){
            return res.status(400).json({ error: 'Validation fails' });
        }

        if(!user){
            user = await User.create({ email });
        }

        return res.status(201).json(user);
    }
}

export default new SessionController();
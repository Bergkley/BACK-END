import Task from './../models/Task';
import * as Yup from 'yup';

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll({
      where: { user_id: req.userId, check: false },
    });
    return res.json(tasks);
  }
  async store(req, res) {
    const schema = Yup.object().shape({
      task: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { task } = req.body;

    const tasks = await Task.create({
      user_id: req.userId,
      task,
    });

    res.json(tasks);
  }

  async update(req, res) {
    const { task_id } = req.params;

    const task = await Task.findByPk(task_id);

    if (!task) {
      return res.status(400).json({ error: 'Task not found' });
    }

    await task.update(req.body);
    return res.json(task);
  }

  async delete(req, res) {
    const { task_id } = req.params;

    const task = await Task.findByPk(task_id);

    if (!task) {
      return res.status(400).json({ error: 'Task not found' });
    }

    if (task.user_id !== req.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await task.destroy();
    return res.send();
  }
}

export default new TaskController();

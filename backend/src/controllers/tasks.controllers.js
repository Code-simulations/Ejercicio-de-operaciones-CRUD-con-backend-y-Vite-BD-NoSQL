import color from "chalk";
import user from "../schemas/users.schema.js";
import tasks from "../schemas/tasks.schema.js";

export const creatorTasks = async (req, res) => {
  try {
    const { _id } = req.user;

    const { title, description, isCompleted } = req.body;

    const newTask = new tasks({
      title: title,
      description: description,
      isCompleted: isCompleted,
      creator: _id,
    });
    await user.findByIdAndUpdate(_id, { $push: { tasks: newTask._id } });

    newTask.save();

    if (newTask === null) return res.status(404).json({ message: "no se pudo crear la tarea por favor intente de nuevo" });

    return res.status(200).json({ message: "tarea creada con éxito" });
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de creatorTasks"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const { _id } = req.user;
    const myTasks = await tasks.find({ creator: _id }).populate({ path: "creator", select: "_id" });
    res.status(200).json(myTasks);
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de getAllTasks"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

export const deledTasks = async (req, res) => {
  try {
    const idUser = req.user._id;
    const idTasks = req.params._id;
    const searchTasks = await tasks.find({ $and: [{ _id: idTasks, creator: idUser }] }).exec();
    if (searchTasks.length === 0) return res.status(404).json({ message: "no hay tarea para eliminar " });
    await tasks.findByIdAndDelete(idTasks);
    res.status(200).json({ message: "tarea eliminada con éxito" });
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de getAllTasks"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

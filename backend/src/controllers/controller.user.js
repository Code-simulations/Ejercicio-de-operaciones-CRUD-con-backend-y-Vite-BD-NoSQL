import user from "../schemas/users.schema.js";
import bcrypt from "bcrypt";
import color from "chalk";

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const result = await user.find({ emails: email });

    if (result.length !== 0) return res.status(404).json({ message: "ya existe un usuario con ese correo electrónico" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      names: name,
      passwords: hashedPassword,
      emails: email,
    });
    if (!newUser) return res.status(404).json({ message: "no se pudo realizar el registro" });
    await newUser.save();
    res.status(200).json({ message: "registro realizado correctamente" });
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de registro"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

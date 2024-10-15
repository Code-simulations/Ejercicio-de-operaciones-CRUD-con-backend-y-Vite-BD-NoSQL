import user from "../schemas/users.schema.js";
import bcrypt from "bcrypt";
import color from "chalk";
import generateJwt from "../helpers/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const result = await user.find({ emails: email });

    if (result.length !== 0) return res.status(404).json({ message: "ya existe un usuario con ese correo electrónico" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      name: name,
      password: hashedPassword,
      email: email,
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

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const searchUser = await user.findOne({ email: email });
    if (searchUser === null) return res.status(404).json({ message: "correo incorrecto" });

    const isCorrect = await bcrypt.compare(password, searchUser.password);
    if (!isCorrect) return res.status(404).json({ message: "contraseña incorrecta" });

    const token = await generateJwt(searchUser.id);

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true, // Usa `true` solo si estás usando HTTPS en producción
      sameSite: "None", // Necesario para solicitudes entre diferentes orígenes
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    });
    res.status(200).json({ message: "iniciando sesión" });
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de login"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

export const session = async (req, res) => {
  try {
    res.status(200).json({ message: "sesión iniciada correctamente", user: req.user });
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de session"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.status(200).json({ message: "sesión cerrada correctamente" });
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                error en el controlador de logout"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

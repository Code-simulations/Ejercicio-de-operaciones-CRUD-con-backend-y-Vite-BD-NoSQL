import jwt from "jsonwebtoken";
import user from "../schemas/users.schema.js";

const validatorJwt = async (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) return res.status(404).json({ message: "autorización denegada" });

  const decoded = jwt.verify(token, "MySecret");

  const searchUser = await user.findById(decoded.id).populate("tasks");

  if (!searchUser) return res.json({ message: "acceso expirado" });

  req.user = searchUser;

  next();
};
export default validatorJwt;

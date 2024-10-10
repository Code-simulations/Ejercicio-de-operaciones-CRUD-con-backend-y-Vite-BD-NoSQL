import { promise } from "bcrypt/promises";
import jwt from "jsonwebtoken";
const generateJwt = (id) => {
  return new promise((res, rej) => {
    const payload = { id };
    jwt.sign(payload, "MySecret", { expiresIn: "10h" }, (err, token) => {
      if (err) {
        console.log(err);
        rej("no se pudo generar el token ");
      } else {
        res(token);
      }
    });
  });
};
export default generateJwt;

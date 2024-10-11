import jwt from "jsonwebtoken";
const generateJwt = async (id) => {
  return new Promise((res, rej) => {
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

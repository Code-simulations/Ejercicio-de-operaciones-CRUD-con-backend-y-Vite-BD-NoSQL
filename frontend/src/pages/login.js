import { headerLogin } from "../components/header.login.js";
export const Login = () => {
  const login = document.createElement("div");
  login.append(headerLogin());
  return login;
};

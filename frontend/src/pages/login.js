import { FormLogin } from "../components/Form.login";
import { loginHeader } from "../components/header.login";

export const Pagelogin = async () => {
  const mainLogin = document.createElement("div");
  mainLogin.classList.add("h-full");

  try {
    const response = await fetch("http://localhost:4000/session", {
      credentials: "include",
    });

    if (!response.ok) {
      mainLogin.append(loginHeader(), FormLogin());
      return mainLogin;
    } else {
      window.location.href = "http://localhost:5173/tasks";
      return null;
    }
  } catch (error) {
    mainLogin.append(loginHeader(), FormLogin());
    return mainLogin;
  }
};

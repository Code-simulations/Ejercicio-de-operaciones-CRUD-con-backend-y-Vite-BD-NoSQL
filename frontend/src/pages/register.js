import { mainRegister } from "../components/form.register.js";
import { HeaderRegister } from "../components/header.register.js";

export const Register = async () => {
  const $register = document.createElement("div");
  $register.classList.add("h-full");
  try {
    const response = await fetch("http://localhost:4000/session", {
      credentials: "include",
    });

    if (response.ok) {
      window.location.href = "http://localhost:5173/tasks";
      return null;
    } else {
      $register.append(HeaderRegister(), mainRegister());
      return $register;
    }
  } catch (error) {
    $register.append(HeaderRegister(), mainRegister());
    return $register;
  }
};

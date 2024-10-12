import { Login } from "./pages/login.js";
import "./styles/style.css";
const params = window.location.pathname;
const app = document.querySelector("#app");

switch (params) {
  case "/":
    app.append(Login());
    break;
  case "/register":
    app.innerHTML = "<h1>register</h1>";
    break;
  case "/home":
    app.innerHTML = "<h1>home</h1>";
    break;
  default:
    app.append(Login);
    break;
}

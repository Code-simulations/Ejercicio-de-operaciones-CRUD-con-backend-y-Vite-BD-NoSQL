import "./assets/style/style.css";
import { Pagelogin } from "./pages/login.js";
import { Register } from "./pages/register.js";
import { listTasks } from "./pages/tasks.js";
const params = window.location.pathname;

const $index = document.querySelector("#app");

switch (params) {
  case "/":
    $index.appendChild(await Register());
    break;
  case "/login":
    $index.appendChild(await Pagelogin());
    break;
  case "/tasks":
    $index.appendChild(await listTasks());
    break;

  default:
    break;
}

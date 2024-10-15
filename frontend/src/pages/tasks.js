import { HedaerTasks } from "../components/Header.tasks";
import { ListTasks } from "../components/ListTasks.js";
export const listTasks = async () => {
  const mainTasks = document.createElement("div");
  mainTasks.classList.add("h-full");
  mainTasks.append(await HedaerTasks());
  mainTasks.append(await ListTasks());
  return mainTasks;
};

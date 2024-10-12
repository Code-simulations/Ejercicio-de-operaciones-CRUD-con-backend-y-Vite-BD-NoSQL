import "../styles/header.login.css";
import imagen from "./../public/img/mi-firma.svg";
export const headerLogin = () => {
  const header = document.createElement("header");
  header.classList.add("cabecera");

  const title = document.createElement("h1");
  title.textContent = "Login ";
  title.classList.add("title-login");

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "Register";
  link.classList.add("link-login");

  const img = document.createElement("img");
  img.src = `${imagen}`;
  img.alt = "Logo";
  img.classList.add("logo");

  header.append(img, title, link);
  return header;
};

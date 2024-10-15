import firma from "../assets/public/images/firma.png";
export const HeaderRegister = () => {
  const $header = document.createElement("header");
  $header.classList.add("flex", "flex-row", "bg-blue-400", "justify-between", "h-14", "items-center", "px-8");
  const $img = document.createElement("img");
  $img.src = firma;
  $img.alt = "sello de finalización de trabajo ";
  $img.classList.add("h-11", "w-11", "rounded-full");
  const $title = document.createElement("h1");
  $title.classList.add("font-bold", "text-2xl");
  $title.textContent = "Register";
  const $link = document.createElement("a");
  $link.href = "http://localhost:5173/login";
  $link.textContent = "Login";
  $link.classList.add("font-bold", "text-xl");

  $header.append($img, $title, $link);
  return $header;
};

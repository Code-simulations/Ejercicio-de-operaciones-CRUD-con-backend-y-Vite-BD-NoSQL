import Swal from "sweetalert2";

export const HedaerTasks = async () => {
  const session = await fetch("http://localhost:4000/session", {
    credentials: "include",
  });
  const response = await session.json();

  const $header = document.createElement("header");
  $header.classList.add("flex", "flex-row", "bg-blue-400", "justify-between", "h-14", "items-center", "px-8");
  const $title = document.createElement("h1");
  $title.classList.add("font-bold", "text-2xl");
  $title.textContent = "Panel de tareas";
  if (session.ok) {
    const $link = document.createElement("button");
    $link.textContent = "cerrar session";
    $link.addEventListener("click", async () => {
      const logout = await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
      });
      const res = await logout.json();
      await Swal.fire({
        icon: "success",
        title: res.message,
        confirmButtonText: "ok",
        backdrop: false,
      });
      window.location.href = "http://localhost:5173/login";
    });
    $header.append($link);
  } else {
    window.location.href = "http://localhost:5173/login";
  }

  $header.append($title);
  return $header;
};

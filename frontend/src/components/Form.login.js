import Swal from "sweetalert2";

export const FormLogin = () => {
  const $main = document.createElement("div");
  $main.classList.add("h-5/6", "flex", "justify-center", "items-center");

  const form = document.createElement("form");
  form.classList.add("bg-blue-400", "h-3/4", "w-1/3", "flex", "justify-center", "flex-col", "rounded-3xl", "p-14", "items-baseline");

  form.innerHTML = `
    <label for="email">Email:</label>
    <input type="email" id="email" required class='w-5/6 p-1 rounded-lg mb-1 ml-4'>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" required class='w-5/6 p-1 rounded-lg mb-1 ml-4'>
    <br>
    <button type='submit' class='bg-black text-white px-4 py-2 rounded-xl'>login</button>
  `;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        return await Swal.fire({
          title: "no se pudo iniciar sesión",
          text: result.message || "Acceso denegado",
          icon: "error",
          confirmButtonText: "OK",
          backdrop: false,
        });
      }
      await Swal.fire({
        title: "Iniciando sesión",
        text: result.message || "Acceso concedido a sus tareas",
        icon: "success",
        confirmButtonText: "OK",
        backdrop: false,
      });

      window.location.href = "http://localhost:5173/tasks";
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al iniciar sesión , intenta nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  });

  $main.appendChild(form);
  return $main;
};

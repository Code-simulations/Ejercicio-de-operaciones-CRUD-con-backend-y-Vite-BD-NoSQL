import Swal from "sweetalert2";

export const mainRegister = () => {
  const $main = document.createElement("div");
  $main.classList.add("h-5/6", "flex", "justify-center", "items-center");

  const form = document.createElement("form");
  form.classList.add("bg-blue-400", "h-3/4", "w-1/3", "flex", "justify-center", "flex-col", "rounded-3xl", "p-14", "items-baseline");

  form.innerHTML = `
    <label for="name">Username:</label>
    <input type="text" id="name" required class='w-5/6 p-1 rounded-lg mb-1 ml-4'>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" required class='w-5/6 p-1 rounded-lg mb-1 ml-4'>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" required class='w-5/6 p-1 rounded-lg mb-1 ml-4'>
    <br>
    <button type='submit' class='bg-black text-white px-4 py-2 rounded-xl'>Register</button>
  `;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    console.log(email, name, password);

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      await Swal.fire({
        title: "Registro Exitoso",
        text: result.message || "Tu cuenta ha sido creada con éxito.",
        icon: "success",
        confirmButtonText: "OK",
      });

      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al registrar tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  });

  $main.appendChild(form);
  return $main;
};

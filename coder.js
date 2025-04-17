let autos = []; // Aca van a ir guardados los autos

const autosGuardados = localStorage.getItem("autos");

if (autosGuardados) {
  autos = JSON.parse(autosGuardados);
}

// A buscar elementos del DOM
const marcaInput = document.querySelector(".marca");
const modeloInput = document.querySelector(".modelo");
const precioInput = document.querySelector(".precio");
const btnAgregar = document.querySelector(".btnAgregar");
const busquedaInput = document.querySelector(".formulario-buscar");
const btnBuscar = document.querySelector(".btnBuscar");
const listaAutos = document.querySelector(".listaAutos");

// Guardar en localStorage
function guardarLocalStorage() {
  localStorage.setItem("autos", JSON.stringify(autos));
}

btnAgregar.addEventListener("click", () => {
  const marca = marcaInput.value.trim();
  const modelo = modeloInput.value.trim();
  const precio = parseFloat(precioInput.value);

  if (!marca || !modelo || isNaN(precio)) {
    alert("Completa todos los campos correctamente");
    return;
  }

  const auto = { marca, modelo, precio };

  autos.push(auto);

  // Funciones
  guardarLocalStorage();
  limpiarFormulario();
  renderizarAutos();
});

// Buscar auto
btnBuscar.addEventListener("click", () => {
  const terminoBusqueda = busquedaInput.value.trim().toLowerCase();
  const resultados = autos.filter((auto) =>
    auto.marca.toLowerCase().includes(terminoBusqueda)
  );

  renderizarAutos(resultados);
});

function renderizarAutos(lista = autos) {
  listaAutos.innerHTML = "";

  if (lista.length === 0) {
    listaAutos.innerHTML =
      "<p style='color: red; text-align: center; font-size: 24px; font-weight: bold; margin-top: 20px;'>No hay autos en stock...</p>";
    return;
  }

  lista.forEach((auto, index) => {
    const li = document.createElement("li");
    li.textContent = `${auto.marca} - ${auto.modelo} - $${auto.precio}`;
    const btnVender = document.createElement("button");
    btnVender.textContent = "Vender";
    btnVender.classList.add("btn");

    btnVender.addEventListener("click", () => venderAutos(index));

    li.appendChild(btnVender);

    listaAutos.appendChild(li);
  });
}

function venderAutos(index) {
  const vendido = autos.splice(index, 1)[0];

  alert(`Auto vendido: ${vendido.marca} - ${vendido.modelo}`);

  renderizarAutos();
}

// Limpiar formulario
function limpiarFormulario() {
  marcaInput.value = "";
  modeloInput.value = "";
  precioInput.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarAutos();
});

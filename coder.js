console.log(
  "Bienvenido a la concesionaria de autos. Aquí se mostrarán los resultados."
);

let autos = [];

function mostrarMenu() {
  let opcion = prompt(
    "---- Concesionaria de Autos ---- \n" +
      "-- Por favor seleccione una opción: -- \n" +
      "1. Agregar un auto \n" +
      "2. Buscar autos \n" +
      "3. Ver autos disponibles \n" +
      "4. Salir"
  );

  switch (opcion) {
    case "1":
      agregarAuto();
      break;
    case "2":
      buscarAuto();
      break;
    case "3":
      verAutos();
      break;
    case "4":
      alert("Saliendo de la concesionaria...");
      return;
    default:
      alert("Opción no válida...");
  }

  setTimeout(mostrarMenu, 100);
}

function agregarAuto() {
  let marca = prompt("Ingrese la marca del vehículo: ");
  let modelo = prompt("Ingrese el año del vehículo: ");
  let precio = parseFloat(prompt("Ingrese el precio del vehículo: "));

  if (marca && modelo && !isNaN(precio) && precio > 0) {
    let auto = { marca, modelo, precio };
    autos.push(auto);
    console.log("Auto agregado:", auto);
  } else {
    alert("Datos inválidos");
  }
}

function buscarAuto() {
  if (autos.length === 0) {
    alert("No hay autos en stock");
    return;
  }

  let buscador = prompt("Ingrese el nombre del vehículo que está buscando:");
  let resultados = autos.filter((auto) =>
    auto.marca.toLowerCase().includes(buscador.toLowerCase())
  );

  if (resultados.length > 0) {
    console.log("Autos encontrados:");
    resultados.forEach((resultado, index) => {
      console.log(
        `${index + 1}. ${resultado.marca} - ${resultado.modelo} - $${
          resultado.precio
        }`
      );
    });
    alert("Revisa la consola para ver los resultados");
  } else {
    alert("No se encontraron autos con ese criterio");
  }
}

function verAutos() {
  if (autos.length === 0) {
    alert("No hay autos en stock");
  } else {
    console.log("Autos disponibles:");
    autos.forEach((auto, index) => {
      console.log(
        `${index + 1}. ${auto.marca} - ${auto.modelo} - $${auto.precio}`
      );
    });
    alert("Revisa la consola para ver los resultados");
  }
}

mostrarMenu();

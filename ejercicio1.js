function calcularPuntoE() {
  alert("Hola Vas a Calcular el Punto de Equilibrio");
  const costosFijos = parseFloat(prompt("ingrese los costos fijos"));
  const precioVenta = parseFloat(prompt("ingrese precio de venta"));
  const costosVar = parseFloat(prompt("ingrese costo variable"));
  let cantidadVentas = costosFijos / (precioVenta - costosVar);
  alert(`El punto de equilibrio es , ${cantidadVentas}`);
}

calcularPuntoE();

function calcularModelo503020() {
  const ingresoTotal = parseFloat(prompt("ingrese monto Total de ingreso"));
  let gastosNec = (ingresoTotal * 50) / 100;
  let gastosOpc = (ingresoTotal * 30) / 100;
  let ahorroInversion = (ingresoTotal * 20) / 100;
  alert(` ud. tiene $${gastosNec} para gastos necesarios , $${gastosOpc} para gastos 
  opcionales y $${ahorroInversion} para ahorro e inversion `);
}
calcularModelo503020();

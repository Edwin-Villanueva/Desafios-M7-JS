function validarEdad(edad) {
  if (edad > 18) {
    alert("Bienvenido !");
  } else {
    alert("Lo siento ud. no es mayor de Edad");
  }
}

function login() {
  const edad = parseFloat(prompt("ingrese su Edad"));
  validarEdad(edad);
}
login();

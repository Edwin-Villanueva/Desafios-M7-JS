function solicitarCredenciales() {
  let inputUsuario = prompt("ingrese su nombre de usuario");
  let inputClave = prompt("ingrese su contraseña");
  return [inputUsuario, inputClave];
}
function validarCredenciales(inputUsuario, inputClave) {
  const usuario = "admin";
  const clave = "1234";

  if (usuario === inputUsuario) {
    if (clave === inputClave) {
      return 0;
    } else {
      return 2;
    }
  } else {
    return 1;
  }
}
function mensaje(valor, usuario) {
  switch (valor) {
    case 0:
      alert("Bienvenido " + usuario);
      break;
    case 1:
      alert("el nombre de usuario ingresado es invalido");
      break;
    case 2:
      alert("la clave ingresada es invalida");
      break;
  }
}
function login() {
  let [inputUsuario, inputClave] = solicitarCredenciales();
  let validacion = validarCredenciales(inputUsuario, inputClave);
  mensaje(validacion, inputUsuario);
}

login();

window.onload=iniciar;

function iniciar(){
  document.getElementById("enviar").addEventListener('click',validarLogIn, false);
  document.getElementById("lanzaMar").addEventListener('click',validarMensaje, false);
}

function validaNombre(){
  var elemento = document.getElementById("user");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error2(elemento,"Debe introducir un usuario")
    }
    if(elemento.validity.patterMismatch){
      error2(elemento,"El nombre debe tener entre 4 y 15 caracteres")
    }
    // error(elemento);
    return false;
  }
  return true;
}

function validaPassword(){
  var elemento = document.getElementById("pswd");
  if (!elemento.checkValidity()){
    error(elemento);
    return false;
  }
  return true;
}

function validaEmail(){
  var elemento = document.getElementById("email");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error2(elemento,"Debe introducir un email")
    }
    return false;
  }
  return true;
}

function validaAsunto(){
  var elemento = document.getElementById("asunto");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error2(elemento,"Debe introducir un asunto")
    }
    return false;
  }
  return true;
}

function validaMensaje(){
  var elemento = document.getElementById("redactado");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error2(elemento,"Debe introducir un mensaje")
    };
    return false;
  }
  return true;
}

function validarLogIn(e){
  if (validaNombre() && validaPassword() && confirm ("Si todos los datos son correctos accederas a tu perfil"))
  {
    return true
  }else{
    e.preventDefault();
    return false;
  }
}

function validarMensaje(e){
  borrarError();
  if (validaEmail() && validaAsunto() && validaMensaje() && confirm("Pulsa aceptar para mandar la botella al mar"))
  {
    return true
  }else{
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
  elemento.className="error";
  elemento.focus();
}

function error2(elemento, mensaje){
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}

function borrarError(){
  var formulario = document.forms[0];
  for(var i=0; i<formulario.elements.length;i++){
    formulario.elements[i].className="";
  }
}

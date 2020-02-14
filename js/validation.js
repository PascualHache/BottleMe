window.onload=iniciar;

var nombreError=false;
var pswdError=false;
var mailError=false;
var asuntoError=false;
var mensajeError=false;

function iniciar(){
  document.getElementById("login").addEventListener('click',validarLogIn, false);
  document.getElementById("lanzaMar").addEventListener('click',validarMensaje, false);
}

function validaNombre(){
  var elemento = document.getElementById("user");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      nombreError=true;
      error(elemento, "LoginError","Debe introducir un usuario")
    }
    else if(elemento.validity.patternMismatch){
      nombreError=true;
      error(elemento, "LoginError", "El nombre debe tener entre 4 y 15 caracteres")
    }
    else{
      nombreError=false;
    }
    return false;
  }
  return true;
}

function validaPassword(){
  var elemento = document.getElementById("pswd");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing || elemento.validity.patternMismatch){
      pswdError=true;
      error(elemento,"LoginError","Debe introducir una contraseña entre 4 y 15 caracteres")
    } else{
      pswdError=false;
    }
    return false;
  }
  return true;
}

function validaEmail(){
  var elemento = document.getElementById("email");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      mailError=true;
      error(elemento, "MailFormError","Debe introducir un email")
    }
    else if(elemento.validity.patternMismatch){
      mailError=true;
      error(elemento, "MailFormError", "Introduce un email con formato válido")
    } else{
      mailError=false;
    }
    return false;
  }
  return true;
}

function validaAsunto(){
  var elemento = document.getElementById("asunto");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      asuntoError=true;
      error(elemento, "IssueFormError","Debe introducir un asunto")
    } else{
      asuntoError=false;
    }
    return false;
  }
  return true;
}

function validaMensaje(){
  var elemento = document.getElementById("redactado");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      mensajeError=true;
      error(elemento, "MsnFormError","Debe introducir un asunto")
    } else{
      mensajeError=false;
    }
    return false;
  }
  return true;
}

function validarLogIn(e){
  borrarError(e);
  validaPassword();
  validaNombre();
  if (!nombreError && !pswdError && confirm("Si todos los datos son correctos accederas a tu perfil"))
  {
    return true
  }else{
    e.preventDefault(); //evita que printe el mensaje flotante por defecto de campo
    return false;
  }
}

function validarMensaje(e){
  borrarError(e);
  validaMensaje();
  validaAsunto();
  validaEmail();
  if (!mailError && !asuntoError && !mensajeError && confirm("Pulsa aceptar para mandar la botella al mar"))
  {
    return true
  }else{
    e.preventDefault(); //evita que printe el mensaje flotante por defecto de campo
    return false;
  }
}

function error(elemento, nombreErrorID, mensaje){
  document.getElementById(nombreErrorID).innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}

function borrarError(elemento){
  errorFormIDlist = ["MsnFormError","IssueFormError","MailFormError","LoginError"];
  for(var p=0; p<errorFormIDlist.length;p++){
    document.getElementById(errorFormIDlist[p]).innerHTML = "";
  }
  for(var n=0; n<document.forms.length;n++){
    var formulario = document.forms[n];
    for(var i=0; i<formulario.elements.length;i++){
      formulario.elements[i].className="";
    }
  }
}

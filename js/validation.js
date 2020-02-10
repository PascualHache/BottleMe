window.onload=iniciar;

function iniciar(){
  document.getElementById("login").addEventListener('click',validarLogIn, false);
  document.getElementById("lanzaMar").addEventListener('click',validarMensaje, false);
}

function validaNombre(){
  var elemento = document.getElementById("user");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error(elemento, "LoginError","Debe introducir un usuario")
    }
    if(elemento.validity.patternMismatch){
      error(elemento, "LoginError", "El nombre debe tener entre 4 y 15 caracteres")
    }
    return false;
  }
  return true;
}

function validaPassword(){
  var elemento = document.getElementById("pswd");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing || elemento.validity.patternMismatch){
      error(elemento,"LoginError","Debe introducir una contraseña entre 4 y 15 caracteres")
    }
    return false;
  }
  return true;
}

function validaEmail(){
  var elemento = document.getElementById("email");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error(elemento, "MailFormError","Debe introducir un email")
    }
    if(elemento.validity.patternMismatch){
      error(elemento, "MailFormError", "Introduce un email con formato válido")
    }
    return false;
  }
  return true;
}

function validaAsunto(){
  var elemento = document.getElementById("asunto");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error(elemento, "IssueFormError","Debe introducir un asunto")
    }
    return false;
  }
  return true;
}

function validaMensaje(){
  var elemento = document.getElementById("redactado");
  if (!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      error(elemento, "MsnFormError","Debe introducir un asunto")
    };
    return false;
  }
  return true;
}

function validarLogIn(e){
  borrarError(e);
  if (validaNombre() && validaPassword() && confirm("Si todos los datos son correctos accederas a tu perfil"))
  {
    return true
  }else{
    e.preventDefault();
    return false;
  }
}

function validarMensaje(e){
  borrarError(e);
  if (validaEmail() && validaAsunto() && validaMensaje() && confirm("Pulsa aceptar para mandar la botella al mar"))
  {
    return true
  }else{
    e.preventDefault();
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
  console.log(elemento);
  for(var n=0; n<document.forms.length;n++){
    var formulario = document.forms[n];
    for(var i=0; i<formulario.elements.length;i++){
      formulario.elements[i].className="";
    }
  }
}

function registrar(){
  var emailRegistro = document.getElementById("emailRegistro").value
  var passwordRegistro = document.getElementById("passwordRegistro").value;

  firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorCode);
    alert(errorMessage);
    // ...
  }).then(function(){
    verificarEmail();
    console.log("enviando correo de verificacion");
    location.reload();
  });
}

function login(){
  var emailLogin = document.getElementById("emailLogin").value
  var passwordLogin = document.getElementById("passwordLogin").value

  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }).then(function(){
    alert("ingreso con exito")
  });
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("Usuario activo")
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      usuarioActivo();
      // ...
    } else {
      console.log("Usuario inactivo")
      // User is signed out.
      // ...
    }
  });
}
observador()

function usuarioActivo(){
  var inicioSesion = document.getElementById("inicioSesion");
  inicioSesion.innerHTML = `
  <h2 class="col-12">Gracias por viajar con nosotros</h2>
  <button onclick="cerrarSesion()" class="offset-4 col-4 btn btn-primary"> Cerrar Sesion </button>
  `
}

function cerrarSesion(){
  firebase.auth().signOut()
  .then(function(){
    console.log("saliendo...")
    location.reload();
  })
  .catch(function(error){
    console.log(error);
  });
}

function verificarEmail(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}
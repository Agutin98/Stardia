// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArwWhMcV0lLCIYBqiMOsCKA8KX39mk5NA",
  authDomain: "stardia-8d1c8.firebaseapp.com",
  databaseURL: "https://stardia-8d1c8.firebaseio.com",
  projectId: "stardia-8d1c8",
  storageBucket: "stardia-8d1c8.appspot.com",
  messagingSenderId: "691616855343",
  appId: "1:691616855343:web:3baf08348819cbe4cd1dda",
  measurementId: "G-725KGW9YTG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// "Referencia" a los objetos Planetas
var planetasRef = firebase.database().ref().child("Planetas")


//Visualizar los datos del nodo mediante un console.log
planetasRef.on('value', snapshot => {
  console.log(snapshot.val());
})


//Referencias a los elementos del modal
var titulo = $(".tituloModal");
var imagen = $(".imagen");
var descripcion = $(".contenido");


//botones
var boton = $(".boton")


//funcion del evento click
boton.click(function(){

  var planetaid = $(this).attr("planetaid");

  planetasRef.once('value').then(function(snapshot){
    
    var nombreDb = snapshot.val();
    console.log(nombreDb)
    
  })
})

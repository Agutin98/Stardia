var database = firebase.database()


//referencias a las claves del Json (es una ruta de archivos)
database.ref("Alumnos/");
database.ref("cursos/")

//ejemplo
database.ref("Alumnos/martes/mañana")

//existen dos formas de recuperar los datos, con los metodos .on y .once

database.ref("Alumnos/").on("value",function(datalist){});

database.ref("cursos/").once("value",function(datalist){});


//eventos child

//se dispara la funcion cada vez que se agregue un child
database.ref("cursos/").once("child_added",function(dataelement){});
//se dispara el evento cada vez que cambia un elemento child
database.ref("cursos/").once("child_changed",function(dataelement){});
//se dispara el evento cada vez que un elemento child es removido
database.ref("cursos/").once("child_removed",function(dataelement){});


// el metodo .val() asignado al parametro agregado a la funcion
database.ref("Alumnos/").on("value",function(datalist){
    var datos = datalist.val() //esto "desencripta los datos de la base de google y guarda en "datos" el objeto JSON de la ruta de referencia"

    for(var i in datos){
        string += "<div><p>dia : "+datos[i].nombre+"<p></div>" // esto crea un div y un p y los agrega al HTML
        datos[i].nombre //llamo a los valores "nombre" de cada "key o clave" dia
        datos[i].cantidad
        for (var j in datos[i].turnos){ //sirve para repetir todos los turnos de cada dia en datos (estoy iterando la key "dias")
            var turno = datos[i].turno[j] //iterar con un for todos los turnos dentro de cada dia
        }
    }
    $("divacompletar").html(string) //reemplazo en HTML los datos por los valores devueltos de Firebase
});
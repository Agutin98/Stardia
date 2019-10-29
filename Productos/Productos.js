planetas = {
    "planeta1" : {
        "nombre" : "Marte",
        "descripcion" : "Hasta el año 2020, nadie habia tenido el honor de pisar al gigante rojo, ahora, con Stardia, por un modico precio, puede hacerlo usted mismo.",
        "imagen" : "../Imagenes/Mars.jpg"
    },

    "planeta2" : {
        "nombre" : "Tierra",
        "descripcion" : "No hay nada mas acogedor que su propio hogar, por eso, en Stardia le ofrecemos volver a casa, al menor costo.",
        "imagen" : "../Imagenes/Earth.jpg"
    },

    "planeta3" : {
        "nombre" : "Luna",
        "descripcion" : "El principal destino de los Stardust, un lugar atractivo, barato y sobre todo, cerca de casa, la luna.",
        "imagen" : "../Imagenes/Moon.jpg"
    }
}

var boton = $("button");

boton.click(function(){
    var planetaid = $(this).attr("planetaid"),
    planeta = planetas[planetaid];

    $(".tituloModal").text(planeta.nombre)
    $(".contenido").text(planeta.descripcion)
    $(".imagen").attr("src", planeta.imagen)
})

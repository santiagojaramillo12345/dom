//controlando Etiquetas con el Dom}


//1. Almacenar en memoria (Crear una variable)
//LA etiqueta que quiero  controlar

let etiquetaImagen=document.getElementById("fotografia")
//console.log(etiquetaImagen)

//2. Controlando uestra etiqueta
//2.1 Conttrolar es cambiar la fuente (SRC) de una etiqueta

etiquetaImagen.src="./img/saitama_puños.jpg"

//2.2 Controlar es cambiar el contenido de una etiqueta

let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="Historia"
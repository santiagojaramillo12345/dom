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

//2.3 controlar es agregar estilos
etiquetaTitulo.classList.add("fuente,alineado")

//2.4 controlador es remover estilos
let etiquetaparrafo=document.getElementById("parrafo")
etiquetaparrafo.classList.remove("text-danger")

//Controlar es Dectectar Eventos




let etiquetabotom=document.getElementById("botom")
etiquetabotom.addEventListener("click",function(Evento){
Evento=true
if (Evento=true){etiquetaImagen.src="./img/Saitama.webp"

}else 

if(Evento=false)
;etiquetaImagen.src="./img/saitama_puños.jpg"
Evento=true
}
)
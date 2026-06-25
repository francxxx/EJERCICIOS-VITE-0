
// Variables y constantes

let mivariable
var miotravariable //esto está obsoleto

const miValorInalterable = "cualquiercosa"

mivariable = "Igor"
miotravariable = "Aranaz"

let num1 = 10.8
let num2 = 8
let resultado = num1 * num2

// console.log(mivariable + " " + miotravariable)
// console.log(resultado) 


// aquí recojo un elemento html dentro de una constante
// const elementoHtmlBoton = document.getElementById("botonID")
const elementoHtmlBoton = document.querySelector("#botonID")
// a través de esa constante (colección html) le cambio/agrego propiedades
// console.log(elementoHtmlBoton)

// recojo todos los elementos de clase boton, ya como nodos
const elementosHtmlBoton = document.querySelectorAll(".boton")
// console.log(elementosHtmlBoton)


// // Evento de escucha sobre un elemento recogido en una constante (evento tipo click)
// elementoHtmlBoton.addEventListener("click", function(event){    
//     event.currentTarget.style.backgroundColor="pink"
//     this.style.color="green"
//     elementoHtmlBoton.style.border="3px solid black"
// })



// recojo todos los elementos html que tengan la clase "boton"
// La constante en la que los recojo cuarda una colección de items
const botones = document.querySelectorAll(".boton")
// const botones = document.getElementsByClassName("boton")

// // opción 1 para recorrer botones
// // forof para recorrer botones
// for(const boton of botones){
//     boton.addEventListener("click", function(){  
//         e.currentTarget.style.border="2px solid red"          
//         this.style.backgroundColor="pink"
//         boton.style.color="green"
//     })
// }

// // opción 2 para recorrer botones
// // función normal con foreach para recorrer botones
// botones.forEach(function(boton){    
//     boton.addEventListener("click", function(e){
//         // alternativas para hacer referencia al elemento boton para cambiarle los estilos
//         e.currentTarget.style.border="2px solid blue"      
//         this.style.backgroundColor="pink"
//         boton.style.color="green"
//     })
// })


// opción 3 para recorrer botones
// función flecha con foreach para recorrer botones
botones.forEach((boton)=>{   

    // escucho el botón sobre el que se ha hecho click. Sólo entro cuandos e hace click en uno
    boton.addEventListener("click", (e)=>{

        // Recorro trodos los botones de clase boton para resetearles el color
        botones.forEach((boton)=>{
            boton.style.backgroundColor="#410a6e"
            boton.style.border="2px dashed #410a6e"
            boton.style.color="white"
            // console.log(mivariable)
        })

        // Una vez he reseteado todos los botones, cambio de color el target sobre el que se ha hecho click.
        e.currentTarget.style.border="2px solid green"  
        boton.style.backgroundColor="pink"
        boton.style.color="green"        
    })

})




// ---------------------------------
// Ejercicio del toggle con el texto
// Efecto acordeón

// recojo la colección de nodos con clase .botonDesplegar
const botonesDesplegar = document.querySelectorAll(".botonDesplegar")

// recorro con forEach y funciones flecha
botonesDesplegar.forEach((item)=>{
    
    item.addEventListener("click", ()=>{

        // Cojo el elemento padre y de ahí el elemento de la clase que me interesa (sólo el primero con esa clase)
        const superior = item.parentElement
        const miParrafo = superior.querySelector(".desplegable")

        // const miParrafo = item.previousElementSibling  //Cojo el elemento previo al que tengo en item.

        miParrafo.classList.toggle("open")

        
        // contains me devuelve true o false si el párrafo contiene esa clase o no de "open"
        // Necesitaremos saber de alguna forma si es true o false para cambiar el texto del botón.
        console.log(miParrafo.classList.contains("open"))



        // Opción 1: Condicional if/else
        if(miParrafo.classList.contains("open")===true){
            item.textContent="Leer menos"
        }else{
            item.textContent="Leer más"
        }

        // Opción 2: Operador ternario 
        miParrafo.classList.contains("open") ? item.textContent ="Leer menos" : item.textContent ="Leer más"

        // Opción 2: Operador ternario más optimizado
        const h = miParrafo.classList.contains("open")
        item.textContent = h ? "Leer menos" : "Leer más"
       
    })
    
})





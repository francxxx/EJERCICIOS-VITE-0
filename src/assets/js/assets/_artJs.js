let mivariable
var miotravariable // esto es obsoleto
const miValorInalterable = "cualquiercosa"

mivariable = 'igor'
miotravariable = "Aranaz"

let num1 = 20
let num2 = 8
let resultado = num1 * num2


console.log(mivariable + "" + miotravariable)
console.log(resultado)

//const elementoHtmlBoton = document.getElementById("boton")
const elementoHtmlBoton = document.querySelector("#botonID")

//elementoHtmlBoton.style.backgroundColor="pink"

// console.log(elementoHtmlBoton)


elementoHtmlBoton.addEventListener("click", function(event){
    event.currentTarget.style.backgroundColor="pink"
    elementoHtmlBoton.style.color="black"
})

const botones = document.querySelectorAll(".boton")

botones.forEach(function(boton){
    boton.addEventListener("click", function(e){
        boton.style.backgroundColor="pink"
        boton.style.color="green"
    })

})




botones.forEach((boton)=>{

    boton,addEventListener("click" , (e)=>{

        botones.forEach((boton)=>{
            boton.style.backgroundColor="#410a6e"
            boton.style.border="2px dashed #410a6e"
            boton.style.color="white"
            console.log(mivariable)
            })

        e.currentTarget.style.border="2px solid green"
        boton.style.backgroundColor="pink"
        boton.style.color="green"

    })

})

const botonesDesplegar = document.querySelectorAll(".botonDesplegar")
const parrafoADesplegar = document.querySelector(".desplegable")

    botonesDesplegar.forEach((item)=>{

        item.addEventListener("click" , ()=>{
            parrafoADesplegar.classList.toggle("open")
        })
    })








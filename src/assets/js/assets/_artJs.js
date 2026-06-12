let mivariable
var miotravariable // esto es obsoleto
const miValorInalterable = "cualquiercosa"

mivariable = 'igor'
miotravariable = "Aranaz"

let num1 = 20
let num2 = 8
let resultado = num1 + num2


console.log(mivariable + "" + miotravariable)
console.log(resultado)

//const elementoHtmlBoton = document.getElementById("boton")
const elementoHtmlBoton = document.querySelector("#IDboton")

//elementoHtmlBoton.style.backgroundColor="pink"

// console.log(elementoHtmlBoton)


elementoHtmlBoton.addEventListener("click", function(){
    elementoHtmlBoton.style.backgroundColor="orange"
    elementoHtmlBoton.style.color="black"
})

const botones = document.querySelectorAll(".boton")

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        boton.style.backgroundColor="pink"
        boton.style.color="green"
    })

})

botones.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        boton.style.backgroundColor="pink"
        boton.style.color="green"
    })

})




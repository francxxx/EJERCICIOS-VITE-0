export default function validationForm(){

    // seleccionamos furmulario por etiqueta
    const $form = document.querySelector("form");
    const messagesError={
        name : {
            pattern:"[A-Za-z]{3}",
            message: "El nombre debe contener solo letra y 3 digitos",
        },
        surname : {
            pattern:"[A-Za-z]{3}",
            message: "El nombre debe contener solo letra y 3 digitos",
        },
    };

    document.addEventListener("submit" , (event)=>{
        event.preventDefault();

        const $form = event.target;
        
        const $formfield = $form.querySelectorAll(".form__field");
        

        $formfield.fornEach((input) => {

            const input = field 
            const pattern = new RegExp(errors[input.name].pattern);

            const $span = document.createElement("span");
            $span.innerHTML = errors[input,name].message;
            const $formfield = input.querySelector(".form__field");

            if(!pattern.text(input.value)){

            }else {
            
            }

        });
    });
}
export default function modal(template){
    const $modal = document.createElement("div");
    $modal.id ="modal";

    $modal.innerHTML=`

    <div class="modal__container">
        <div class="modal__header">
            <span class="modal--btn-close">

                <i class="fa-solid fa-xmark"></i>
            </span
        </div>
        <div class="modal__body">
        ${template}
        </div>
    </div>
    `;
        // cerramos el modal cuando se pulse click
        
    $modal.addEventListener("click" , ()=>{

    $modal.remove();
    });

    return $modal;
    }

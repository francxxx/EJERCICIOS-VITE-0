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

    const $btnClose = $modal.querySelector(".modal--btn-close");
    const $modalContainer = $modal.querySelector(".modal__container");

    
// cerramos el modal cuando se pulse click

    $btnClose.addEventListener("click", () => $modal.remove());

    $modal.addEventListener("click" , (event) => {
       if(event.target.closest("[data-modal-close]")){
            $modal.remove()
            $modal.classList.remove(".close")
        }
        
        if(!$modalContainer.contains(event.target)){
            $modal.remove();

        }
    });

    return $modal;
    }

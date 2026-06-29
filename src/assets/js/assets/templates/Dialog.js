export default function Dialog() {
    return`
    <div class="modal-template modal-template--uno">
        <span class="modal-template__tag">Modal 1</span>
        <h2>Titulo Modal</h2>
        <p>
            Esta es la primera ventana modal. Puedes usarla para mostrar un mensaje
            sencillo al usuario
        </p>
        <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-primary" type="button" data-modal-close>Aceptar</button>
            <button class="btn btn-outline-primary" type="button" data-modal-close>Cerrar</button>
        </div>

    </div>

    `}
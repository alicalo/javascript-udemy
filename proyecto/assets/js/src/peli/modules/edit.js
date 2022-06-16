import Storage from "./storage.js";
import List from "./list.js";

export default function() {

    // crear objetos
    const storage = new Storage();
    const list = new List();

    // recorrer peliculas
    let pelis_storage = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    pelis_viewed.forEach(peli => {
        let edit_btn = peli.querySelector(".edit");

        edit_btn.onclick = function () {
            // const id = this.getAttribute('data-id');
            edit_btn.remove();
            peli.querySelector(".delete").remove();

            // añadir un trozo de html debajo de los btn
            let peli_edit_html = `
                <div class="edit-form">
                    <h3 class="title">Editar película</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}"></input>
                        <textarea class="edited-description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar" />
                    </form>
                </div>
            
            `;

            peli.innerHTML += peli_edit_html;
            // seleccionar el btn actualizar

            // aplicar evento click

                // buscar el indice de la peli a actualizar

                // guardar objeto en ese indice

                // actualizar el localStorage

                // mostrar el listado

        }        

    })
}
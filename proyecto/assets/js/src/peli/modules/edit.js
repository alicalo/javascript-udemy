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
            const peli_id = parseInt(this.getAttribute('data-id'));
            edit_btn.remove();
            peli.querySelector(".delete").remove();

            // añadir un trozo de html debajo de los btn
            let peli_edit_html = `
                <div class="edit-form">
                    <h3 class="title">Editar película</h3>
                    <form>
                        <input type="text" class="edited-title" value="${peli.querySelector(".title").innerHTML}"></input>
                        <textarea class="edited-description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar" />
                    </form>
                </div>
            
            `;

            peli.innerHTML += peli_edit_html;

            let update_btn = peli.querySelector('.update');
            update_btn.onclick = function(e) {
                e.preventDefault();

                let index = pelis_storage.findIndex(peli => peli.id === peli_id);
                pelis_storage[index] = {
                    id: peli_id,
                    title: peli.querySelector('.edited-title').value,
                    description: peli.querySelector('.edited-description').value,
                }

                // actualizar en el LS
                storage.saveData(pelis_storage);
                list.show(pelis_storage);

                return false
            }

        }        

    })
}
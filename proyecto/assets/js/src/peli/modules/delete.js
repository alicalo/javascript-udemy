import List from "./list.js";
import Storage from "./storage.js";

export default function () {

    // crear objetos
    const storage = new Storage();
    const list = new List();

    // datos de peliculas
    let pelis_storage = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    // recorrer pelis mostradas
    pelis_viewed.forEach(peli => {
        let delete_btn = peli.querySelector('.delete');

        delete_btn.onclick = function() {
            const peli_id = this.getAttribute('data-id');
            console.log(peli_id);
            const new_pelis_storage = pelis_storage.filter((peli) => peli.id !== parseInt(peli_id));

            storage.saveData(new_pelis_storage);
            list.show(new_pelis_storage);
        }
    })

}
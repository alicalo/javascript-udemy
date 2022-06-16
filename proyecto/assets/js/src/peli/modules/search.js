import Storage from "./storage.js";
import List from "./list.js";

export default function() {

    // objetos
    const storage = new Storage();
    const list = new List();

    // los datos elementos del DOM
    let content = document.querySelector('#content');
    let search_btn = document.querySelector('#search');

    // aplicar evento al btn
    search_btn.onclick = (e) => {
        e.preventDefault();

        // conseguir texto del input
        let wanted = document.querySelector('#search_field').value;
        
        // conseguir listado actualizado
        let pelis_stored = storage.getData();

        // filtro
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });

        // mostrar listado
        if(new_pelis.length <= 0) {
            content.innerHTML = `<div><h2>No hay coincidencias</h2></div>`

        } else {
            list.show(new_pelis);
        }
        
        return false;
    }


}
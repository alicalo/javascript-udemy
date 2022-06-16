import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
    constructor() {
        // crear objetos
        this.storage = new Storage();
        this.list = new List();

        // conseguir elementos del DOM a utilizar
        this.title_field = document.querySelector('#title');
        this.description_field = document.querySelector('#description');
        this.save_btn = document.querySelector('#save')
    }

    peliSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            // conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();

            // datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            // validacion
            if (title != '' || description != '') {
                // crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                }

                // añadir al array de objetos
                pelis.push(peli);

                // guardar en localStorage
                this.storage.saveData(pelis);

                // actualizar listado
                this.list.addToList(peli, pelis);
                
            } else {
                alert('Introduce los datos')
            }

            return false;
        }
    }
}
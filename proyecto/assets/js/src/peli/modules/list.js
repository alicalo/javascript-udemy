import deleteOfdList from './delete.js';
import editList from './edit.js';

export default class List {
    constructor() {
        // seleccionar elementos del DOM a usar
        this.content = document.querySelector('#content');
    }

    peliTemplate(peli) {

        return `
            <article class="peli-item" id="peli-${peli.id}">
                <h3 class="title">${peli.title}</h3>
                <p class="description">${peli.description}</p>
                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">Borrar</button>
            </article>
        `;

    }

    addToList(peli, listPelis) {

        // plantilla de pelicula a agregar
        let peli_html = this.peliTemplate(peli);

        // añadir pelicula al DOM
        this.content.innerHTML += peli_html;

        // mostrar pelis
        this.show(listPelis);

    }

    show(pelis) {
        // vaciar DOM del contenedor ppal
        this.content.innerHTML = "";

        // recorrer y mostrar objetos
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        })

        // funcionalidad btn borrado
        deleteOfdList();

        // funcionalidad btn edicion

        editList();

    }
}
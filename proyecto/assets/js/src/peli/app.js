import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';

export default class App {
    constructor() {
        // iniciar
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();

    }

    load() {
        // añadir pelicula
        this.add.peliSave();

        // conseguir array objetos localStorage
        const pelis = this.storage.getData();

        // listar peliculas
        this.list.show(pelis);

        // buscar peliculas

        console.log('La APP de Películas ha sido inicializada...');

    }
}
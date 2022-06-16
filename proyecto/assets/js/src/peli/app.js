import Add from './modules/add.js';

export default class App {
    constructor() {
        // iniciar
        this.Add = new Add();

    }

    load() {
        // añadir pelicula
        this.Add.peliSave();

        // listar peliculas

        // buscar peliculas

        console.log('La APP de Películas ha sido inicializada...');

    }
}
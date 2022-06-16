export default class Add {
    constructor() {

        // conseguir elementos del DOM a utilizar
        this.title_field = document.querySelector('#title');
        this.description_field = document.querySelector('#description');
        this.save_btn = document.querySelector('#save')
    }

    peliSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            // datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            // validacion

            if (title != '' || description != '') {
                // crear objeto a guardar
                let peli = {
                    id: 1,
                    title,
                    description
                }

                // guardar en localStorage
                localStorage.setItem('pelis', JSON.stringify(peli));

                // actualizar listado
                
            } else {
                alert('Introduce los datos')
            }

            return false;
        }
    }
}
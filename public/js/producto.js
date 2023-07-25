var id = 0;

function create() {
    axios.post("/producto",{
            nombre: txtNombre.value,
            cantidad: txtCantidad.value,
            estado: "A",
    })
    .then(function (response){
        console.log(response);
        //read();
    })
    .catch(function (error){
        console.log(error);
    });
}
function read() {
    axios.get("/producto")
    .then(function (response) {
        let tableData = document.querySelector("#tableBody")
        let child = tableData.lastElementChild;
        while (child) {
            tableData.removeChild(child);
            child = tableData.lastElementChild;
        }
        response.data.forEach(element, index => {
            let fila = document.createElement("tr")
            let campoIndice = document.createElement("td");
            let indice = document.createTextNode(index + 1);
            campoIndice.appendChild(indice);
            fila.appendChild(campoIndice);
            Object.entries(element).forEach((entry) => {
                const [key, value] = entry;
                if(key == "nombre" || key == "cantidad" || key == "estado" ){
                    let campo = document.createElement("td")
                    let dato = document.createTextNode(value) 
                    campo.appendChild(dato)
                    fila.appendChild(campo)
                }
            });
            let campoOpcion = document.createElement("td");
            let opcion = document.createElement("input");
            opcion.setAttribute("type", "radio");
            opcion.setAttribute("name", "radOpcion");
            opcion.setAttribute("onclick", `accion(${JSON.stringify(element)})`);
            campoOpcion.appendChild(opcion);
            fila.appendChild(campoOpcion);
            tableData.appendChild(fila);
            
            

        });
    })
    .catch(function (error) {
        console.log(error);
    })
}
read();
function accion(registro) {
     id = registro.id;
     txtNombre.value = registro.nombre;
     txtCantidad.value = registro.cantidad;
     }

function update() {
    axios.put("/producto/" + id, {
     id: id,
     nombre: txtNombre.value,
     cantidad: txtCantidad.value,
         })
         .then(function (response) {
            console.log(response);
            read();
         })
         .catch(function (error) {
            console.log(error);
         });
        }
function deletes() {
             let respuesta = confirm("¿esta seguro de eliminar el producto?");
             if (respuesta) {
             axios
             .delete("/producto/" + this.id)
             .then(function (response) {
             console.log(response);
             read();
             })
             .then(function (error) {
             console.log(error);
             });
             }
             }

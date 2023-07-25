var id = 0

function create(){
    axios.post('/categoria',{
        nombre: txtNombre.value,
        codigo: txtCodigo.value,
    }).then(function(response){
        console.log(response)
        read();
        clear();
    })
    .catch(function (error){
        console.log(error)
    });
}
function read(){
    axios.get("/categoria")
    .then(function (response){
        console.log(response.data);
        datos = " ";
        response.data.forEach((element, index) => {
            datos += `<tr onclick='load(${JSON.stringify(element)})'>`;
            datos += `<td>${index + 1}</td>`;
            datos += `<td>${element.nombre}</td>`;
            datos += `<td>${element.codigo}</td>`;
            datos += `<td>${element.estado}</td>`;
            datos += `</tr>`;
        });
        tableBody.innerHTML = datos;
    })
    .catch(function (error){
        console.log(error)
    })
}
function update(){
    axios.put("/categoria/" + id,{
        id: id,
        nombre: txtNombre.value,
        codigo: txtCodigo.value,
    })
    .then(function (response){
        console.log(response)
        read();
        clear();
    })
    .catch(function (error){
        console.log(error)
    })
}
function deletes(){
    let respuesta = confirm("¿Esta seguro de eliminar la Categoria?")
    if(respuesta){
        axios.delete("/categoria/" + id)
        .then(function (response){
            console.log(response);
            read();
            clear();
        })
        .catch(function(error){
            console.log(error);
        });
    }
}

function clear(){
    txtNombre.value = " ";
    txtCodigo.value = " ";
}
function load(element){
    id = element.id;
    txtNombre.value = element.nombre;
    txtCodigo.value = element.codigo;
}

read()
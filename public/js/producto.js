function create() {
    axios
        .post("/producto",{
            nombre: "Fresa",
            cantidad: 14,
            estado: "A",
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
}
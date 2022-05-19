function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").Value;
    localStorage.movil = document.getElementById("movil").Value;
}
function recuperarDatos(){
    if((localStorage.nombre != undefined && (localStorage.movil != undefined))){

        document.getElementById("datos").innerHTML = "nombre" + localStorage.nombre + "<br> "
    }else{
        document.getElementById("datos").innerHTML = "nombre" + localStorage.nombre + "<br> "
    }
}
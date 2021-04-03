
function limpiar(){
    document.Formu.dinero.value = "";
    document.Formu.total.value = "";
    document.Formu.comisiones.value = "";
}

function calcular(){
    var cantidad = parseInt(document.Formu.dinero.value);
    var comision = cantidad * 0.10;
    var ventas = comision * 3;
    var total = cantidad + ventas;
    document.Formu.comisiones.value = ventas;
    document.Formu.total.value = total;
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio)){
        alert("Campos vacios");
    }else{
        calcular();
    }
}

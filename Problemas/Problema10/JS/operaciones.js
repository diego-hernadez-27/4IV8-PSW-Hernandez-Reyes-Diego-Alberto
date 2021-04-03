
function limpiar(){
    document.Formu.dinero.value = "";
    document.Formu.total.value = "";
    document.Formu.anos.value = "";
    document.Formu.utilidad.value = "";
}

function calcular(){
    var dinero = parseFloat(document.Formu.dinero.value);
    var anos = parseInt(document.Formu.anos.value);
    var total = 0.0;
    
    
    if (anos < 1) {
        total = dinero * 0.05;
    } else if (anos >= 1 && anos < 2) {
        total = dinero * 0.07;
    } else if (anos >= 2 && anos < 5){
        total = dinero * 0.10;
    } else if (anos >= 5 && anos < 10) {
        total = dinero * 0.15;
    } else{
        total = dinero * 0.20;
    }

    var limi = total.toFixed(2);

    document.Formu.total.value = limi + dinero;
    document.Formu.utilidad.value = limi;
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    NoVacio2 = document.getElementById("NoVacio2").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio) || NoVacio2 == 0 || /^\+$/.test(NoVacio2)){
        alert("Campos vacios");
    }else{
        limites();
    }
}

function limites(){
    var dinero = parseFloat(document.Formu.dinero.value);
    var anos = parseInt(document.Formu.anos.value);

    if(dinero > 99999){
        alert("No creo que ganes tanto dinero");
    }else if(anos > 70){
        alert("¿Son muchos años no te parece?");
    }else if(dinero < 5000){
        alert("No creo que ganes tan poco dinero");
    }else{
        calcular();
    }
}
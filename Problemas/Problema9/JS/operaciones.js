
function limpiar(){
    document.Formu.dinero.value = "";
    document.Formu.total.value = "";
    document.Formu.horas.value = "";
}

function calcular(){
    var dinero = parseFloat(document.Formu.dinero.value);
    var horas = parseInt(document.Formu.horas.value);
    var total = 0;
    var h_extra = 0;
    
    if(horas > 40){ 
        h_extra = horas - 40;
        total = h_extra * dinero * 2 + 40 * dinero;
    }else if(horas > 48){
        h_extra = horas - 48;
        total = h_extra * dinero * 3 + 40 * dinero + 8 * dinero * 2;
    }else{
        total = horas * dinero;
    }

    var limi = total.toFixed(2);

    document.Formu.total.value = limi;
}

function limites(){
    var dinero = parseInt(document.Formu.dinero.value);
    var horas = parseInt(document.Formu.horas.value);
    if(dinero < 15 || horas > 77){
        alert("Te estan haciendo explotación laboral")
    }else if(dinero > 24){
        alert("No creo que ganes tanto en un pais como Méxcio");
    }else if(horas < 7){
        alert("No creo que tengas tan pocas horas de trabajo");
    }else{
        calcular();
    }
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
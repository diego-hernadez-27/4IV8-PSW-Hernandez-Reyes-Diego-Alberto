
function limpiar(){
    document.Formu.primero.value = "";
    document.Formu.segundo.value = "";
    document.Formu.tercero.value = "";
    document.Formu.examen.value = "";
    document.Formu.final.value = "";
    document.Formu.total.value = "";
}

function calcular(){
    var valor1 = parseFloat(document.getElementById("NoVacio").value);
    var valor2 = parseFloat(document.getElementById("NoVacio2").value);
    var valor3 = parseFloat(document.getElementById("NoVacio3").value);
    var valor4 = parseFloat(document.getElementById("NoVacio4").value);
    var valor5 = parseFloat(document.getElementById("NoVacio5").value);
    var parciales = (valor1 + valor2 + valor3)/3;
    var final = parciales * 0.55 + valor4 * 0.30 + valor5 * 0.15;
    document.Formu.total.value = final;
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    NoVacio2 = document.getElementById("NoVacio2").value;
    NoVacio3 = document.getElementById("NoVacio3").value;
    NoVacio4 = document.getElementById("NoVacio4").value;
    NoVacio5 = document.getElementById("NoVacio5").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || NoVacio2.length == 0 || NoVacio3.length == 0 || NoVacio4.length == 0 || NoVacio5.length == 0){
        alert("Campos vacios");
    }else{
        limites();
    }
}

function limites(){
    var valor1 = parseFloat(document.getElementById("NoVacio").value);
    var valor2 = parseFloat(document.getElementById("NoVacio2").value);
    var valor3 = parseFloat(document.getElementById("NoVacio3").value);
    var valor4 = parseFloat(document.getElementById("NoVacio4").value);
    var valor5 = parseFloat(document.getElementById("NoVacio5").value);

    if(valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10 || valor5 > 10){
        alert("Calificaciones mayores a 10")
    }else{
        calcular();
    }
}
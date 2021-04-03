
function limpiar(){
    document.Formu.ano.value = "";
    document.Formu.mes.value = "";
    document.Formu.dia.value = "";
    document.Formu.total.value = "";
}

function calcular(){
    var dia = parseInt(document.Formu.dia.value);
    var mes = parseInt(document.Formu.mes.value);
    var ano = parseInt(document.Formu.ano.value);
    if(dia <= 0 || dia > 31 || mes <= 0 || mes > 12 || ano <= 0 || ano > 2020){
        alert("algun dato es incorrecto")
    }else{
    let fechaN = new Date(mes + '/' + dia + '/' + ano);
    let fechaA = new Date();

    var total = fechaA.getFullYear() - fechaN.getFullYear();
    
    if(fechaA.getMonth > fechaN.getMonth){
        //intente hacer esto pero no se puedo =(
        document.Formu.total.value = total - 1; 
    }else{
       document.Formu.total.value = total; 
    }
    }
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    NoVacio2 = document.getElementById("NoVacio2").value;
    NoVacio3 = document.getElementById("NoVacio3").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio) || NoVacio2 == 0 || /^\+$/.test(NoVacio2) || NoVacio3 == 0 || /^\+$/.test(NoVacio3)){
        alert("Campos vacios");
    }else{
        calcular();
    }
}
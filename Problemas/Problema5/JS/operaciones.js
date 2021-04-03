
function limpiar(){
    document.Formu.hombres.value = "";
    document.Formu.mujeres.value = "";
    document.Formu.total_mujeres.value = "";
    document.Formu.total_hombres.value = "";
}

function calcular(){
    var mujeres = parseInt(document.Formu.mujeres.value);
    var hombres = parseInt(document.Formu.hombres.value);
    var suma = mujeres + hombres;

    if(suma > 60){
        mensaje();
    }else{
        var total_mujeres = 100 * mujeres/suma;
        var total_hombres = 100 * hombres/suma;
        var limitado = total_mujeres.toFixed(2)
        var limitado2 = total_hombres.toFixed(2)

        document.Formu.total_mujeres.value = limitado + "%";
        document.Formu.total_hombres.value = limitado2 + "%";
    }
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    NoVacio2 = document.getElementById("NoVacio2").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio) || NoVacio2 == 0 || /^\+$/.test(NoVacio2)){
        alert("Campos vacios");
    }else{
        calcular();
    }
}

function mensaje(){
    alert("¿Muchos chamacos no cree?")
}
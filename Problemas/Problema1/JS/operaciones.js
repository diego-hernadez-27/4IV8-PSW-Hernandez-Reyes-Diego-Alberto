
function limpiar(){
    document.Formu.dinero.value = "";
    document.Formu.meses.value = "";
    document.Formu.total.value = "";
}

function calcular(){
    var cantidad = parseInt(document.Formu.dinero.value);
    var interes = cantidad * 0.02;
    var mes = interes * document.Formu.meses.value;
    var total = cantidad + mes;
    document.Formu.total.value = total;
}


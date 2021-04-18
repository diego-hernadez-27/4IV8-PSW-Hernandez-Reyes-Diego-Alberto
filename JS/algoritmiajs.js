function problema1() {

    var p1_input = document.querySelector('#p1-input').value;
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';

    p1_array.forEach(function (palabra, i) {
        if (i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;
}

function problema2() {

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];


    v1 = v1.sort(function (a, b) {
        return b - a;
    });

    v2 = v2.sort(function (a, b) {
        return b - a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for (var i = 0; i < v1.length; i++) {
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto Escalar Minimo : ' + p2_producto;

}

function problema3() {
    var introducido = document.querySelector('#p3-input').value;
    var tamanios = [];
    var tam = [];

    while (palabrasXD.firstChild) {
        palabrasXD.removeChild(palabrasXD.firstChild);
    }

    if (introducido != '') {

        var palabra = introducido.split(',');

        for (var i = 0; i < palabra.length; i++) {

            var letras = palabra[i];
            var valor_u = [...new Set(letras.split(''))];
            var result = valor_u.length;

            tamanios.push(result);

            let p = document.createElement('ul');
            p.innerHTML = `
         
            <li> ${letras} : ${result} </li>
        
            `;
            palabrasXD.appendChild(p);

        }

        var mayor = Math.max.apply(null, tamanios)

        document.querySelector('#p3-output').textContent = "La(s) palabara(s) con mayor numero de caracteres unicos es: " + mayor;
    }


    /*var introducido = document.querySelector('#p3-input').value;
    var palabras = introducido.split(",");
    var m_palabra = " ";

    while(palabrasXD.firstChild){
        palabrasXD.removeChild(palabrasXD.firstChild);
    }

    for (var word of palabras) {
        if (word.length > m_palabra.length) {
            m_palabra = word;

            var numero_letras = m_palabra.split("");
            var nro = numero_letras.length;
        }
        let p = document.createElement('ul');
        p.innerHTML = `
         
        <li> ${word} </li>
        
        `;
        palabrasXD.appendChild(p);
    }

    document.querySelector('#p3-output').textContent = 'La palabra con más caracteres es: ' + m_palabra + ' ' + nro + 'las letras contadas son:' + numero_letras;
    */
}

function SoloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = ",ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚ";

    especiales = [8, 13];
    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
}

function SoloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = ",ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar solo letras y comas");
 return false;
}
}

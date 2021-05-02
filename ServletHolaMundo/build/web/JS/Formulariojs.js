/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    expresion = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/;
    letras = /[a-zA-Z]/;
    num = /[0-9]/;

function validar(){
    var nombre, appat, apmat, correo, edad;
    nombre = document.getElementById("nombre").value;
    appat = document.getElementById("appat").value;
    apmat = document.getElementById("apmat").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    
    
    if(nombre === "" || apmat === "" || appat === "" || edad === "" || correo === ""){
        alert("Algun campo esta vacio");
        return false;
    }else if(nombre.length > 20){
        alert("Nombre demasiado largo ");
        return false;
    }else if(appat.length > 20 || apmat.length > 20){
        alert("Appelidos demasiado largos ");
        return false;
    }else if(correo.length > 30){
        alert("Correo demasiado largo ");
        return false;
    }else if(isNaN(edad)){
        alert("La edad ingresada no es un numero");
        return false;    
    }else if(!expresion.test(correo)){
        alert("Corrreo no valido");
        return false;    
    }else if(!letras.test(nombre) || !letras.test(appat) || !letras.test(apmat)){
        alert("Nombre o apellidos contienen letras");
        return false;
    }else if(!num.test(edad)){
        alert("Edad debe contener solo numeros");
        return false;
    }
    
}


function formuEliminar(){
        
    var id = document.getElementById("id").value;
        
    if(id === ""){
        alert("Campo vacio");
        return false;
    }else if(!num.test(id)){
        alert("Id debe ser un numero");
        return false;
    }else if(id.length > 2){
        alert("Id muy grande");
        return false;
    }
             
}

function validar2(){
    var nombre, appat, apmat, correo, edad, id;
    nombre = document.getElementById("newnombre").value;
    appat = document.getElementById("newappat").value;
    apmat = document.getElementById("newapmat").value;
    edad = document.getElementById("newedad").value;
    correo = document.getElementById("newcorreo").value;
    id = document.getElementById("idactualizar").value;
    
    if(nombre === "" || apmat === "" || appat === "" || edad === "" || correo === "" || id === ""){
        alert("Algun campo esta vacio");
        return false;
    }else if(nombre.length > 20){
        alert("Nombre demasiado largo ");
        return false;
    }else if(appat.length > 20 || apmat.length > 20){
        alert("Appelidos demasiado largos ");
        return false;
    }else if(correo.length > 30){
        alert("Correo demasiado largo ");
        return false;
    }else if(isNaN(edad)){
        alert("La edad ingresada no es un numero");
        return false;    
    }else if(!expresion.test(correo)){
        alert("Corrreo no valido");
        return false;    
    }else if(!letras.test(nombre) || !letras.test(appat) || !letras.test(apmat)){
        alert("Nombre o apellidos contienen letras");
        return false;
    }else if(!num.test(edad)){
        alert("Edad debe contener solo numeros");
        return false;
    }else if(!num.test(id)){
        alert("Id debe ser un numero");
        return false;
    }else if(id.length > 2){
        alert("Id muy grande");
        return false;
    }
    
}

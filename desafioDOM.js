let usuario_registrado = "Marcos";

let title = document.getElementById("title");


console.log(title.innerText);

title.innerText = "Bienvenido al sistema ";
title.style.textAlign = "center";
title.style.color = "red"

function validar_edad(){
    let usuario = document.getElementById("usuario");
    let mensaje = document.getElementById("mensaje")

    if(usuario.value == usuario_registrado){
        let aviso = document.createElement("h1");
        mensaje.innerHTML = ""
        aviso.innerText = "Bienvenido a nuestro sitio"; 
        aviso.style.fontFamily = "Times New York";
        aviso.style.fontSize = "50px"
        aviso.style.color = "blue"
        mensaje.append(aviso);

    }
    else{
        document.body.innerHTML = '<h1> Usuario incorrecto <h1> ';

    }
    
}
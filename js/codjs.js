function saludo(){
    alert("Hola alumnos");
    saludoSecundario();
}

function saludoSecundario(){
    alert("Socio esperando nuestro turno mi socio");
    cambiarColor();
    te_amo_mama();
}
function te_amo_mama(){
    alert("Cucha la amo miso");
}
function cambiarColor(){
    alert("Entró");
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "red";
}
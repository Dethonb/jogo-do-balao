var tmp;
var bola;
var container
function adicionarBola(){
    container = document.getElementById("container");
    bola = document.createElement("img");
    
    bola.setAttribute("src", "../balao.svg");

    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 400);

    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);

    bola.setAttribute("style","margin-left:"+x+"px;margin-top:"+y+"px; background-color: rgb("+r+","+g+","+b+");");
    bola.setAttribute("onclick", "estourar(this)");

    container.appendChild(bola);
    
}

function estourar(elemento){
    container.removeChild(elemento);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p +1;
    document.getElementById("pontos").innerHTML = p;
}


function iniciar(){
    tmp = setInterval(adicionarBola, 700);
}

document.getElementById("start").disabled = true;


function parar(){
    clearInterval(tmp);
}

function limpar(){
    var bolas = document.querySelectorAll('img');
    bolas.forEach(estourar);
    document.getElementById('pontos').innerHTML = 0;
    parar();

}

function velocidade(){
   
   var id = event.srcElement.id;

   
if (id == 1) {
    limpar();
    tmp = setInterval(adicionarBola, 850);
    document.getElementById("velo").innerHTML = "Velocidade: <span id='dev'>Devagar</span>";
} else if (id == 2) {
    limpar();
    tmp = setInterval(adicionarBola, 500);
    document.getElementById("velo").innerHTML = "Velocidade: <span id='nor'>Normal</span>";
} else if (id == 3) {
    limpar();
    tmp = setInterval(adicionarBola, 300);
    document.getElementById("velo").innerHTML = "Velocidade: <span id='rap'>Rápido</span>";
}
    
}
var tmp;
var bola;
var container;
function adicionarBola(){
    container = document.getElementById("container");
    bola = document.createElement("img");
    
    bola.setAttribute("src", "./assets/images/balao.svg");

    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 400);

    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);

    bola.setAttribute("style",`margin-left: ${x}px; margin-top: ${y}px; background-color: rgb(${r}, ${g}, ${b})`);
    bola.setAttribute("onclick", "estourar(this)");

    container.appendChild(bola);
    
}

function estourar(elemento){
    container.removeChild(elemento);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p += 1;
    document.getElementById("pontos").innerHTML = p;
}

function parar(){
    clearInterval(tmp);
}

function limpar(){
    var bolas = document.querySelectorAll('img');
    bolas.forEach(estourar);
    document.getElementById('pontos').innerText = 0;
    parar();

}

function vincularContato() {
    document.getElementById("dibotao").innerHTML =('<button onclick="removerContato(this)">Iniciar</button>');
    parar()
 
 }

function removerContato() {
    
    let span = document.querySelector('.bot-speed span')
    let speed;
    document.getElementById("dibotao").innerHTML =('<button style="background-color:#DD0000;" onclick="vincularContato(this)">Parar</button>');
    if(span.id == 'dev'){
        speed = 750
    } else if(span.id == 'nor'){
        speed = 500
    } else {
        speed = 200
    }
    velocidade(speed)

 }



function velocidade(speed){
   
    switch (speed) {
        case 750:
            document.getElementById("velo").innerHTML = "Velocidade: <span id='dev'>Devagar</span>";
            limpar();
            tmp = setInterval(adicionarBola, 750);
            break;
    case 500:
            document.getElementById("velo").innerHTML = "Velocidade: <span id='nor'>Normal</span>";
            limpar();
            tmp = setInterval(adicionarBola, 500);
            break;
        case 200:
            document.getElementById("velo").innerHTML = "Velocidade: <span id='rap'>Rápido</span>";
            limpar();
            tmp = setInterval(adicionarBola, 200);
            break;
                    
        default:
            document.getElementById("velo").innerHTML = "Velocidade: <span id='rap'>Normal</span>";
            limpar();
            tmp = setInterval(adicionarBola, 500);
            break;
    }
    
}
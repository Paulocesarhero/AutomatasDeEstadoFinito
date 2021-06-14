
// Empieza el codigo para sustraer la cadena


let agregarLetra = document.querySelector("#agregarLetra").onclick = function () {
    agregarLaCadena()
};

let seleccionarletra = document.querySelector("#inputGroupSelect01");

let cadena = document.querySelector("#cadena");

let botonIncializador = document.querySelector("#btn-check-outlined").onclick = function () {
    incializarAnimacion()
};

function incializarAnimacion() {
    let estado=false; /*Si es estado es falso quiere decir que no esta ene el estado de aceptacion*/
    for (let i = 0; i < cadena.value.length; i++) {
        if (cadena.value[i] === 'b') {
            if (estado == true){
                d3.select("#graph2").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a"] e1 -> e0[label = "a" ] e0 -> e0[label = "b"] e1 -> e1[label = "b", color=red]  e1 -> e1[label = "c"] e0 -> e0[label = "c"]  }');
            }else{
                d3.select("#graph2").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a"] e1 -> e0[label = "a" ] e0 -> e0[label = "b", color=red] e1 -> e1[label = "b"]  e1 -> e1[label = "c"] e0 -> e0[label = "c"]  }');
            }
            document.querySelector("#lebel2").innerHTML = i+1;

        } else if (cadena.value[i] === 'a') {
            if (estado === false){
                d3.select("#graph1").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a", color=red] e1 -> e0[label = "a" ] e0 -> e0[label = "b"] e1 -> e1[label = "b"]  e1 -> e1[label = "c"] e0 -> e0[label = "c"]  }');
                estado = true;
            }else if (estado === true){
                d3.select("#graph1").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a"] e1 -> e0[label = "a", color=red] e0 -> e0[label = "b"] e1 -> e1[label = "b"]  e1 -> e1[label = "c"] e0 -> e0[label = "c"]  }');
                estado = false;
            }

            document.querySelector("#lebel1").innerHTML = i+1;

        } else if (cadena.value[i] === 'c') {
            if (estado == true){
                d3.select("#graph3").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a"] e1 -> e0[label = "a" ] e0 -> e0[label = "b"] e1 -> e1[label = "b"]  e1 -> e1[label = "c", color=red] e0 -> e0[label = "c"]  }');
            }else{
                d3.select("#graph3").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a"] e1 -> e0[label = "a" ] e0 -> e0[label = "b"] e1 -> e1[label = "b"]  e1 -> e1[label = "c"] e0 -> e0[label = "c", color=red]  }');
            }
            document.querySelector("#lebel3").innerHTML = i+1;

        }

    }
    let pinfo = document.querySelector("#pInformativo");
    pinfo.innerHTML = "Como podemos ver en el digrama " + cadena.value.length + " el estado es " + estado;
}

function agregarLaCadena() {
    if (cadena.value.length < 3) {
        switch (seleccionarletra.selectedIndex) {
            case 0:
                cadena.value += 'a';
                break
            case 1:
                cadena.value += 'b';
                break
            case 2:
                cadena.value += 'c';
                break
            default:
                cadena.value = cadena.value;
        }
    } else {
        alert("No puedes ingresar mas valores")
    }

    // let cadena = document.querySelector("#cadena").value = "Hola mudo de nuevo";
}

//Empieza el codigo del segundo ejemplo

let agregarPesoslet = document.querySelector("#agregarpesos").onclick = function () {
    agregarPesos()
};
let pesos = document.querySelector("#pesos");
let seleccionarPesos = document.querySelector("#inputGroupSelect02")

function agregarPesos(){
    if (pesos.value.length < 4){
        switch (seleccionarPesos.selectedIndex){
            case 0:
                pesos.value += 'a';
                break
            case 1:
                pesos.value += 'b';
                break
        }
    }else
        alert("no se puden introduzir mas valores")
}

let inicarEjemplo2 = document.querySelector("#iniciarsegungoEjemplo").onclick = function (){
    iniciarAnimacion2();
};
function  iniciarAnimacion2(){
    let estadopesos=false; /*Si es estado es falso quiere decir que no esta ene el estado de aceptacion*/
    let posicionDeEstado = 0;
    for (let i = 0; i < pesos.value.length; i++) {//recordemos que a es igual a 5 pesos
        if (pesos.value[i] === 'a' && posicionDeEstado === 0) {
            posicionDeEstado = 2;
            d3.select("#grapho1").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$", color=red] e2 -> e1[label = "5$"] e2 -> e3[label = "10$"]   e1 -> e3[label = "5$"] e3 -> e3[label = "10$"] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele1").innerHTML = i+1;
            estadopesos=false;
        }else if (pesos.value[i] === 'a' && posicionDeEstado === 2){
            posicionDeEstado = 1;
            d3.select("#grapho2").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$"] e2 -> e1[label = "5$", color=red] e2 -> e3[label = "10$"]  e1 -> e3[label = "5$"] e3 -> e3[label = "10$"] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele2").innerHTML = i+1;
            estadopesos=true;
        }else if (pesos.value[i] === 'a' && posicionDeEstado === 1){
            posicionDeEstado = 3;
            d3.select("#grapho3").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$"] e2 -> e1[label = "5$"] e2 -> e3[label = "10$"]  e1 -> e3[label = "5$", color=red] e3 -> e3[label = "10$"] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele3").innerHTML = i+1;
            estadopesos=false;
        }else if (pesos.value[i] === 'a' && posicionDeEstado === 3){
            posicionDeEstado = 3;
            d3.select("#grapho4").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$"] e2 -> e1[label = "5$"] e2 -> e3[label = "10$"]   e1 -> e3[label = "5$"] e3 -> e3[label = "10$"] e3 -> e3[label = "5$", color=red]  }');
            document.querySelector("#lebele4").innerHTML = i+1;
            estadopesos=false;
        }else if (pesos.value[i] === 'b' && posicionDeEstado === 0 ){/*Empieza con los 10 pesos*/
            posicionDeEstado = 1;
            d3.select("#grapho1").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$", color=red] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$"] e2 -> e1[label = "5$"] e2 -> e3[label = "10$"]   e1 -> e3[label = "5$"] e3 -> e3[label = "10$"] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele1").innerHTML = i+1;
            estadopesos=true;
        }else if (pesos.value[i] === 'b' && posicionDeEstado === 1 ){
            posicionDeEstado = 3;
            d3.select("#grapho2").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" , color=red] e0 -> e2[label = "5$"] e2 -> e1[label = "5$"] e2 -> e3[label = "10$"]   e1 -> e3[label = "5$"] e3 -> e3[label = "10$"] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele2").innerHTML = i+1;
            estadopesos=false;
        }else if (pesos.value[i] === 'b' && posicionDeEstado === 3){
            posicionDeEstado = 3;
            d3.select("#grapho3").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$"] e2 -> e1[label = "5$"] e2 -> e3[label = "10$"]   e1 -> e3[label = "5$"] e3 -> e3[label = "10$", color=red] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele3").innerHTML = i+1;
            estadopesos=false;
        }else if (pesos.value[i] === 'b' && posicionDeEstado === 2){
            posicionDeEstado = 3;
            d3.select("#grapho3").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e2 [fillcolor="#1f77b4"] e3 [fillcolor="#1f77b4"] e0 -> e1[label = "10$"] e1 -> e3[label = "10$" ] e0 -> e2[label = "5$"] e2 -> e1[label = "5$"] e2 -> e3[label = "10$", color=red]   e1 -> e3[label = "5$"] e3 -> e3[label = "10$"] e3 -> e3[label = "5$"]  }');
            document.querySelector("#lebele3").innerHTML = i+1;
            estadopesos=false;
        }


    }
    let pinfo1 = document.querySelector("#pInformativo1");
    pinfo1.innerHTML = "Como podemos ver en el digrama " + pesos.value.length + " el estado es " + estadopesos;

}
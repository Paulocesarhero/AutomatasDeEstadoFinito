
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
            }else if (estado = true){
                d3.select("#graph1").graphviz().renderDot('digraph  {e0 [fillcolor="#d62728"] e1 [fillcolor="#1f77b4", shape="doublecircle"] e0 -> e1[label = "a"] e1 -> e0[label = "a", color=red] e0 -> e0[label = "b"] e1 -> e1[label = "b"]  e1 -> e1[label = "c"] e0 -> e0[label = "c"]  }');
                estado = true;
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
}

function agregarLaCadena() {
    if (cadena.value.length < 4) {
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

var dotIndex = 0;
var graphviz = d3.select("#graph").graphviz()
    .transition(function () {
        return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(500)
            .duration(1500);
    })
    .logEvents(true)
    .on("initEnd", render);

function render() {
    var dotLines = dots[dotIndex];
    var dot = dotLines.join('');
    graphviz
        .renderDot(dot)
        .on("end", function () {
            dotIndex = (dotIndex + 1) % dots.length;
            render();
        });
}
let dots = [
    //grafo por defecto
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a"] ',
        '    e1 -> e0[label = "a"] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c"] ',
        '}'
    ],
    //grafo e0 a e1 numero impar de a estado1
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a", color=red] ',
        '    e1 -> e0[label = "a"] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c"] ',
        '}'
    ],
    //grafo de e1 a e0 numero par de a estado0
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a"] ',
        '    e1 -> e0[label = "a" , color=red] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c"] ',

        '}'
    ],
    //grafo con numero par de a y alguna b estado 0
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a"] ',
        '    e1 -> e0[label = "a"] ',
        '    e0 -> e0[label = "b" , color=red] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c"] ',
        '}'
    ],
    //grafo con numero impar de a y alguna b estado1
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a"] ',
        '    e1 -> e0[label = "a" ] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b", color=red,] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c"] ',
        '}'
    ],
    //grafo con una c en el estado 0
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a"] ',
        '    e1 -> e0[label = "a" ] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c", color=red,] ',
        '}'
    ],
    //grafo con una c en el estado1
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a"] ',
        '    e1 -> e0[label = "a" ] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c", color=red,] ',
        '    e0 -> e0[label = "c"] ',
        '}'
    ],

    ''
];
dots.push(/*tendria que ir del e0 a e1*/
    [
        'digraph  {',
        '    node [style="filled"]',
        '    e0 [fillcolor="#d62728"]',
        '    e1 [fillcolor="#1f77b4", shape="doublecircle"]',
        '    e0 -> e1[label = "a", color=red,] ',
        '    e1 -> e0[label = "a" ] ',
        '    e0 -> e0[label = "b"] ',
        '    e1 -> e1[label = "b"] ',
        '    e1 -> e1[label = "c"] ',
        '    e0 -> e0[label = "c"] ',
        '}'
    ]
)

console.log("Este es mi console log:  " + dots[8] + "Este es el tamño del array: " + dots.length)
    //grafo e0 a e1 numero impar de as estado1

// Empieza el codigo para sustraer la cadena


let agregarLetra = document.querySelector("#agregarLetra").onclick = function (){agregarLaCadena()};

let seleccionarletra = document.querySelector("#inputGroupSelect01");

let cadena = document.querySelector("#cadena");


function agregarLaCadena(){
    switch (seleccionarletra.selectedIndex){
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

    // let cadena = document.querySelector("#cadena").value = "Hola mudo de nuevo";
}

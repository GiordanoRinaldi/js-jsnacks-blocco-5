//Scrivi una funzione che fonda due array (aventi lo stesso numero di
//elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var uno = ["a", "b", "c"];
var due = [ 1, 2, 3];

function getSomma (uno, due) {
    var somma = [];
    for (i = 0; i < uno.length; i++) {
        var addizione = uno[i]+due[i];
        somma.push(addizione);
    };

    return somma;
};


console.log(uno);
console.log(due);
console.log(getSomma(uno, due));
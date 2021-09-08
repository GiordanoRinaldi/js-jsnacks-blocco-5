//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
//quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione
//compresa tra “a” e “b”

var array = [1, 2, 3, 4, 5, 6]

var numA = 3;

var numB = 6

function newArray (arr, numUno, numDue){
    var nuovoArray = [];
    for (var i = numUno; i < numDue; i++ ){
        nuovoArray += arr[i];
    }

    return nuovoArray;
};


console.log(newArray(array, numA, numB));
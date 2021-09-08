//Crea 10 oggetti che rappresentano una zucchina.


var zucchine = [
    {
        varieta: "varietá 1" ,
        peso: 50 ,
        lunghezza: 10 ,
    },
    {
        varieta: "varietá 2" ,
        peso: 80 ,
        lunghezza: 1 ,
    },
    {
        varieta: "varietá 3" ,
        peso: 90 ,
        lunghezza: 8 ,
    },
    {
        varieta: "varietá 4" ,
        peso: 200 ,
        lunghezza: 14 ,
    },
    {
        varieta: "varietá 5" ,
        peso: 100 ,
        lunghezza: 1 ,
    },
    {
        varieta: "varietá 6" ,
        peso: 100 ,
        lunghezza: 20 ,
    },
    {
        varieta: "varietá 7" ,
        peso: 70 ,
        lunghezza: 8 ,
    },
    {
        varieta: "varietá 8" ,
        peso: 50 ,
        lunghezza: 9 ,
    },
    {
        varieta: "varietá 9" ,
        peso: 300 ,
        lunghezza: 21 ,
    },
    {
        varieta: "varietá 10" ,
        peso: 60 ,
        lunghezza: 23 ,
    }
]

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchinepiu15 = [];

var zucchinemeno15 = [];


for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza > 15) {
        zucchinepiu15.push(zucchine[i]);
    } else {
        zucchinemeno15.push(zucchine[i]);
    }
}

console.log(zucchinepiu15);

console.log(zucchinemeno15);

var pesoTotpiu15 = 0;
var pesoTotmeno15 = 0;


for (var i = 0; i < zucchinepiu15.length; i++) {
    pesoTotpiu15 += zucchinepiu15[i].peso;
}

for (var i = 0; i < zucchinemeno15.length; i++) {
    pesoTotmeno15 += zucchinemeno15[i].peso;
}

console.log(`${pesoTotpiu15}gr` );
console.log(`${pesoTotmeno15}gr` );




//var pesoTot = 0;


//for (var i = 0; i < zucchine.length; i++) {
//    pesoTot += zucchine[i].peso;
//}

//console.log(`${pesoTot}gr` );
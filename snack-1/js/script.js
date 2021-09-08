//Crea un array di 10 oggetti che rappresentano una zucchina, indicando
//per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

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

var pesoTot = 0;


for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i].peso;
}

console.log(`${pesoTot}gr` );
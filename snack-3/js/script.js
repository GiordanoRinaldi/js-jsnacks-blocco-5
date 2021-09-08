//Scrivi una funzione che accetti una stringa come argomento e la ritorni
//girata (es. Ciao -> oaiC)

var parola = "ciao";


function getGirato(parola){
    var contrario = "";
    for (var i = parola.length - 1; i >= 0; i--){
        contrario += parola[i];
    }

    return contrario;
}

console.log(getGirato(parola));
// Prova di collegamento javascript
console.log("JAVASCRIPT COLLEGATO");

// INPUT
// Chiedo all'utente la distanza che vuole percorrere e la sua età
let distanza=parseInt(prompt("Ciao sono il controllore del treno,quanti km devi percorrere?(Tieni conto che ogni km ti costerà 0.21€)"));
console.log(distanza);
let età=parseInt(prompt("Puoi dirmi quanti anni hai?(I minorenni hanno il 20% di sconto mentre gli anziani over 65 hanno il 40%)"));
console.log(età);
// Controllo che l'utente non abbia scritto dei dati sbagliati
if(isNaN(distanza)||isNaN(età)){
    console.log("L'utente non ha scritto un numero");
    alert("                                         ERRORE\nHAI INSERITO DELLE LETTERE AL POSTO DEI NUMERI,RICARICA E INSERISCI I DATI CORRETTAMENTE");
}else if(età<=0||età>=150||distanza<=0){
    console.log("L'utente non ha scritto un età o una distanza fuori dai limiti");
    alert("                                         ERRORE\nHAI INSERITO UN'ETÀ O UNA DISTANZA NON VALIDA O NON ADATTA PER QUESTO VIAGGIO,RICARICA E INSERISCI I DATI CORRETTAMENTE");
}
//Inizializzo le altre variabili
const prezzoKm=0.21;
const scontoMinorenni=0.2;
const scontoAnziani=0.4;
let prezzoBiglietto=0;
let soldiDaScontare=0;

// LOGICA
// Calcolo il prezzo pieno in base ai km
prezzoBiglietto=prezzoKm*distanza;
console.log("Il prezzo del biglietto è")
console.log(prezzoBiglietto);
// Verifico se l'utente è idoneo ad avere uno sconto e nel caso calcolo quindi l'eventuale sconto
if(età>=65){
    soldiDaScontare=prezzoBiglietto*scontoAnziani;
    console.log("Soldi da scontare:");
    console.log(soldiDaScontare);
    document.getElementById("prezzo-da-scontare").innerHTML=soldiDaScontare.toFixed(2);
    document.getElementById("sconto-da-applicare").innerHTML="40%";
    document.getElementById("prezzo-non-scontato").innerHTML=prezzoBiglietto.toFixed(2);
    prezzoBiglietto=prezzoBiglietto-soldiDaScontare;
}else if(età<18){
    soldiDaScontare=prezzoBiglietto*scontoMinorenni;
    console.log("Soldi da scontare:");
    console.log(soldiDaScontare);
    document.getElementById("prezzo-da-scontare").innerHTML=soldiDaScontare.toFixed(2);
    document.getElementById("sconto-da-applicare").innerHTML="20%";
    document.getElementById("prezzo-non-scontato").innerHTML=prezzoBiglietto.toFixed(2);
    prezzoBiglietto=prezzoBiglietto-soldiDaScontare;
}else{
    document.getElementById("prezzo-da-scontare").innerHTML="NIENTE";
    document.getElementById("sconto-da-applicare").innerHTML="NO";
    document.getElementById("prezzo-non-scontato").innerHTML=prezzoBiglietto;
}

// OUTPUT
console.log("Il prezzo finale del biglietto è: ");
console.log(prezzoBiglietto.toFixed(2));
document.getElementById("età").innerHTML=età;
document.getElementById("distanza").innerHTML=distanza;
document.getElementById("prezzo-finale").innerHTML=prezzoBiglietto.toFixed(2);
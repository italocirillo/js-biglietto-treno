// Prova di collegamento javascript
console.log("JAVASCRIPT COLLEGATO");

// INPUT
// Chiedo all'utente la distanza che vuole percorrere e la sua età
let distanza=parseInt(prompt("Ciao sono il controllore del treno,quanti km devi percorrere?(Tieni conto che ogni km ti costerà 0.21€)"));
console.log(distanza);
let età=parseInt(prompt("Puoi dirmi quanti anni hai?(I minorenni hanno il 20% di sconto mentre gli anziani over 65 hanno il 40%)"));
console.log(età);
//Inizializzo le altre variabili
const prezzoKm=0.21;
const scontoMinorenni=0.2;
const scontoAnziani=0.4;
let prezzoBiglietto=0;
let soldiDaScontare=0;

// LOGICA
// Calcolo il prezzo pieno in base ai km
prezzoBiglietto=prezzoKm*distanza;
console.log(prezzoBiglietto);
// Verifico se l'utente è idoneo ad avere uno sconto e nel caso calcolo quindi l'eventuale sconto
if(età>=65){
    soldiDaScontare=prezzoBiglietto*scontoAnziani;
    console.log(soldiDaScontare);
    prezzoBiglietto=prezzoBiglietto-soldiDaScontare;
}else if(età<18){
    soldiDaScontare=prezzoBiglietto*scontoMinorenni;
    console.log(soldiDaScontare);
    prezzoBiglietto=prezzoBiglietto-soldiDaScontare;
}

// OUTPUT
console.log("Il prezzo finale del biglietto è: "+prezzoBiglietto);
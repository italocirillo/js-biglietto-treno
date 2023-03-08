// Prova di collegamento javascript
console.log("JAVASCRIPT COLLEGATO");

// INPUT
// Chiedo all'utente la distanza che vuole percorrere e la sua età
let distanza=parseInt(prompt("Ciao sono il controllore del treno,quanti km devi percorrere?(Tieni conto che ogni km ti costerà 0.21€)"));
console.log(distanza);
let età=parseInt(prompt("Puoi dirmi quanti anni hai?(I minorenni hanno il 20% di sconto mentre gli anziani hanno il 40%)"));
console.log(età);
//Inizializzo le altre variabili
const prezzoKm=0.21;
const scontoMinorenni=0.2;
const scontoAnziani=0.4;

// LOGICA

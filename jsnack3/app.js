/*jsnack3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let contenitore = [];
for ( let index = 0; index < 10; index++){
    let prompt5 = parseInt(prompt('Inserisci un numero'));
    contenitore.push(prompt5);
}
console.log(contenitore);
 
let somma;
for (let i = 0; i <= contenitore.length; i++){
    somma += contenitore[i];
}
console.log(somma);

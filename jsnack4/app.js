/*jsnack4
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array*/

const array= [];

for (let i=0; i < 6; i++){
    let prompt6 = parseInt(prompt('inserisci il numero'));

    if (prompt6 % 2 !== 0){
        array.push(prompt6);
    }
}console.log(array);
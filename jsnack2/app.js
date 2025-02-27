/*jsnack2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const prompt3 = prompt('Scrivi la tua parola');


const prompt4 = prompt('Scrivi la tua parola');



if (prompt3.length < prompt4.length){
    console.log(prompt3);
    console.log(prompt4);
} else {
    console.log(prompt4);
    console.log(prompt3);
}

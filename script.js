const text = "La vita è breve e incerta, e spesso ci preoccupiamo di accumulare successi e ricchezze per noi stessi. Tuttavia, ciò che conta davvero non sono i beni materiali che possediamo, ma il modo in cui abbiamo influito sulla vita degli altri.";

let soloLettere = "";

let lettere = rimuoviPunteggiatura(text);
console.log(lettere);

let testoMinuscolo = swipeToggle(lettere);
console.log(testoMinuscolo);

let arrayParole = textDivider(testoMinuscolo);
console.table(arrayParole);

let arrayParoleLunghe = longWord(arrayParole, 4);
console.table(arrayParoleLunghe);


// FUNCTION
// rimuovere punteggiatura
function rimuoviPunteggiatura(string) {
    for(let i=0; i<string.length; i++) {
        const element = string[i];
        const charCode = element.charCodeAt()
        
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            console.log(element, charCode);
            soloLettere += element;
        } else {
            soloLettere += " ";
        }
    }
    return soloLettere;
}

// da minuscolo a maiuscolo
function swipeToggle(string) {
    let soloLettere = "";
    for(let i = 0; i < string.length; i++) {
        const element = string[i];
        const charCode = element.charCodeAt()
        if(charCode >= 65 && charCode <= 90) {
            soloLettere += String.fromCharCode(charCode + 32);
        } else {
            soloLettere += element;
        }
    }
    return soloLettere;
}

// dividere il testo in parole, metterle in un array e dividerle per un carattere scelto da noi (defalut spazio)
function textDivider(string, divider=" ") {
    let parole = [];
    let parola = "";
    for(let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element != divider) {
            parola += element;            
        } else {
            if(parola.length) {
                parole.push(parola);                 
            }           
            parola = "";
        }
    }
    if(parola.length) {
        parole.push(parola);                 
    }
    return parole;
}

// solo parole lunghe
function longWord(string, length) {
    let parole = [];
    for(let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element.length > length) {
            parole.push(element);           
        }
    }
    return parole;
}

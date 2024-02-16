let billetter = [];

function kjopbillett () {

     if (validerInputs()) {
    //Henter input-verdier fra bruker
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value
    let telefonnr = document.getElementById("telefonnr").value
    let epost = document.getElementById("e-post").value;
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;

   //Legger verdier i et objekt og legger dette inn i array
   const billett = {film, antall, fornavn, etternavn,telefonnr,epost}
    billetter.push(billett);

    let ut= "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>E-post</th>" +
        "</tr>";
    for (let b of billetter){
        ut+="<tr>";
        ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billettvisning").innerHTML=ut;

    //Setter inputbokser blanke igjen
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("e-post").value="";
 }
}
function slettbilletter () {
    billetter = [];
    document.getElementById("billettvisning").innerHTML="Billettene er slettet";
}

function validerInputs() {
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("e-post").value;

    //Nullstiller feilmeldinger
    document.getElementById("antall-feil").textContent = "";
    document.getElementById("fornavn-feil").textContent = "";
    document.getElementById("etternavn-feil").textContent = "";
    document.getElementById("telefonnr-feil").textContent = "";
    document.getElementById("epost-feil").textContent = "";

    if (antall <= 0 || !Number.isInteger(parseInt(antall))) {
        document.getElementById("antall-feil").innerHTML="Skriv inn antall";
        return false;
    }

    if (fornavn === "") {
        document.getElementById("fornavn-feil").innerHTML="Skriv inn fornavn";
        return false;
    }

    if (etternavn === "") {
        document.getElementById("etternavn-feil").innerHTML="Skriv inn etternavn";
        return false;
    }

    if (telefonnr === "" || isNaN(Number(telefonnr))) {
        document.getElementById("telefonnr-feil").innerHTML="Skriv inn telefonnummer";
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (epost === "" || !emailRegex.test(epost)) {
        document.getElementById("epost-feil").innerHTML="Vennligst skriv inn en gyldig e-post";
        return false;
    }

    return true; // Returnerer true hvis alle valideringer er bestått
}
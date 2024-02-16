let billetter = [];
function kjopbillett () {
    //Henter input-verdier fra bruker
   let fornavn = document.getElementById("fornavn").value;
   let etternavn = document.getElementById("etternavn").value;
   let telefonnr = document.getElementById("telefonnr").value;
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
function slettbilletter () {
    billetter = [];
    document.getElementById("billettvisning").innerHTML="Billettene er slettet";
}
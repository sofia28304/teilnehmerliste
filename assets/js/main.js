// console.log("test");
const Speicher = [];
// Der "Speicher" wird außerhalb der Funktionen geschrieben damit er für beide nutzbar ist und damit er innerhalb der jeweiligen Funktion nicht mit jeder eingabe überschrieben wird. Mit diesr Zeile innerhalb der Funktion wäre die Liste immer nur so lang wie das letzte gepushte/gepopte Element.

function hinzufuegen(event) {
    // Eingabe
    event.preventDefault();

    let teilnehmer = document.getElementById("eingabeHTML").value
    // ... holt was de facto in der Eingabe steht
    // let reset = document.getElementById("reset")

    // Verarbeitung: hier muss für die Arrays eine Art Zwischenspeicher erstellt werden in dem die gespeicherten Daten weiter verarbeitet werden können.

    Speicher.push(teilnehmer);
    console.log(Speicher)

    // Ausgabe: hier weisen wir das fertige Ergbnis nur noch einem HTML Feld zu
    document.getElementById("ausgabe").innerHTML = "<li>" + Speicher.join("</li><li>") + "</li>";
    // document.getElementById("ausgabe").innerHTML = Speicher;

    document.getElementById("reset").reset();
    // dieses Kommando leert das Eingabefeld.
}

function abziehen(event) {
    event.preventDefault();

    // let teilnehmer = document.getElementById("eingabeHTML").value

    Speicher.pop();
    // console.log(Speicher);

    document.getElementById("ausgabe").innerHTML = "<li>" + Speicher.join("</li><li>") + "</li>";
}

console.log(document.title);

//1
let nuevoTitulo = document.getElementById("gen-1");
nuevoTitulo.innerHTML = "Generasión 1 Pokimon";

//2
let fondoGenerasion1 = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg")[0];
fondoGenerasion1.style.backgroundColor = "black";

//3
console.log(location.href);

//4
console.log(location.hostname);

//5
console.log(document.querySelectorAll("img"));

//6
var imagenes = document.querySelectorAll("img");
for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//7
let voladores = document.querySelectorAll(".infocard-lg-data.text-muted .itype.flying");
for (volador of voladores){
    volador.style.backgroundColor = "gray";
};
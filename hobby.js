
let chooseSong = function (songs) {
    return songs[Math.floor(Math.random() * songs.length)];
};

let randomSongs = [];
randomSongs[0] = document.querySelector("#one");
randomSongs[1] = document.querySelector("#two");
randomSongs[2] = document.querySelector("#three");
randomSongs[3] = document.querySelector("#four");
randomSongs[4] = document.querySelector("#five");

document.addEventListener('DOMContentLoaded', (event) => {
    var song = chooseSong(randomSongs).getAttribute("src"),
        audioElement = document.getElementById('audioElem');
    audioElement.setAttribute('src', song);
    document.body.addEventListener("mousemove", function () {
        audioElement.play();
    })
});


let buttonUa = document.querySelector("#ua");
let buttonEu = document.querySelector("#eu");
let tripUa = document.querySelector("#triptoUkraine");
let tripEu = document.querySelector("#triptoEurope");

buttonUa.addEventListener ("click", () =>{
    if (tripUa.style.display != "flex") {
        tripUa.style.display = "flex";
        tripEu.style.display = "none";
     } else {
        tripUa.style.display = "none";
     }
})
buttonEu.addEventListener ("click", () =>{
    if (tripEu.style.display != "flex") {
        tripEu.style.display = "flex";
        tripUa.style.display = "none";
     } else {
        tripEu.style.display = "none";
     }
})

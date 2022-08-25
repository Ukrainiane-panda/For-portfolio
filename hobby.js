
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

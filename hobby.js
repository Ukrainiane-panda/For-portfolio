
let chooseSong = function (songs) {
    return songs[Math.floor(Math.random() * songs.length)];
};

let randomSongs = [];
randomSongs[0] = document.querySelector("#one");
randomSongs[1] = document.querySelector("#two");
randomSongs[2] = document.querySelector("#rthree");
randomSongs[3] = document.querySelector("#four");
randomSongs[4] = document.querySelector("#five");

document.addEventListener('DOMContentLoaded', (event) => {
   // event.chooseSong(randomSongs);
   chooseSong(randomSongs);
});

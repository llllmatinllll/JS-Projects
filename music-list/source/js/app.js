const $ = document;
let musics = $.querySelectorAll(".fa-play");
let audios = $.querySelectorAll("audio");
let musicName;

musics.forEach((music) => {
    music.addEventListener("click", (event) => {
        musicName = event.target.dataset.name;
        audios.forEach((audio) => {
            if (audio.dataset.name == musicName) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    });
});

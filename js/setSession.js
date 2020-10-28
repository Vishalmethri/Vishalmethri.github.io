function setMovieSession(clicked){
    var movie = document.getElementById(clicked).innerText;
    sessionStorage.setItem("Movie",movie);
    sessionStorage.setItem("Series",0);
    sessionStorage.setItem("Anime",0);
    sessionStorage.setItem("Episode", 0);
    window.location.href = "movieplayback.html";
}
function setSeriesSession(clicked){
    var series = document.getElementById(clicked).innerText;
    sessionStorage.setItem("Series",series);
    sessionStorage.setItem("Episode", "Episode 1");
    sessionStorage.setItem("Movie",0);
    sessionStorage.setItem("Anime",0);
    window.location.href = "tvseriesplayback.html";
}
function setSeriesEpisodeSession(clicked){
    var episode = document.getElementById(clicked).innerText;
    sessionStorage.setItem("Episode",episode);
    window.location.href = "tvseriesplayback.html";
}
function setAnimeSession(clicked){
    var anime = document.getElementById(clicked).innerText;
    sessionStorage.setItem("Anime",anime);
    sessionStorage.setItem("Episode", "Episode 1");
    sessionStorage.setItem("Series",0);
    sessionStorage.setItem("Movie",0);
    window.location.href = "animeplayback.html";
}
function setAnimeEpisodeSession(clicked){
    var episode = document.getElementById(clicked).innerText;
    sessionStorage.setItem("Episode", episode);
    window.location.href = "animeplayback.html";
}
function notAvailable(clicked){
    var episode = document.getElementById(clicked).innerText;
    alert("The Episode you are trying to watch is not available at the moment.")
}
var movieName = sessionStorage.getItem("Movie");
var seriesName = sessionStorage.getItem("Series");
var animeName = sessionStorage.getItem("Anime");
var episode = sessionStorage.getItem("Episode");
if(movieName != 0) {
    var rootRef = firebase.database().ref();
    var movie = rootRef.child("Movies").child(movieName);
    movie.on("value", snap => {
        document.getElementById("imdb").innerHTML = snap.child("Imdb").val();
        document.getElementById("description").innerHTML = snap.child("Description").val();
        document.getElementById("cast").innerHTML = snap.child("Cast").val();
        var link = snap.child("Link").val()
        document.getElementById("content").setAttribute("src",link);
        document.getElementById("movieName").innerText = movieName;
        console.log(snap.child("Imdb").val());
    })
}
else if((movieName == 0) && (seriesName == 0) && (animeName != 0)) {
    var rootRef = firebase.database().ref();
    var anime = rootRef.child("Anime").child(animeName).child(episode);
    anime.on("value", snap => {
        document.getElementById("description").innerText = snap.child("Description").val();
        var link = snap.child("Link").val();
        document.getElementById("content").setAttribute("src",link);
        document.getElementById("animeName").innerText = animeName;
        document.getElementById("animeEpisode").innerText = episode;
    })
}
else if((movieName == 0) && (seriesName != 0) && (animeName == 0)) {
    var rootRef = firebase.database().ref();
    var series = rootRef.child("TV Series").child(seriesName).child(episode);
    series.on("value", snap => {
        document.getElementById("description").innerText = snap.child("Description").val();
        var link = snap.child("Link").val();
        document.getElementById("content").setAttribute("src",link);
        document.getElementById("seriesName").innerText = seriesName;
        document.getElementById("seriesEpisode").innerText = episode;
    })
}
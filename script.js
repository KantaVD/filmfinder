// DIT laat de films zien.
  
const showFilm = (array) => {
    console.log(array);
    let window = document.getElementById("overzicht");
    window.innerHTML = ("")
    let n = 0;
    while (n < array.length) {
        
        let newMovie = document.createElement("div");
        let newMovieImg = document.createElement("img");
        let newMovieLink = document.createElement("a");

        newMovie.setAttribute("class", "movie")

        let hrefValue = array[n].poster;
        newMovieImg.setAttribute("src", hrefValue);

        let aValue = "https://www.imdb.com/title/" + array[n].imdbID;
        newMovieLink.setAttribute("href", aValue);
        newMovieLink.setAttribute("target", "blank");
        
        window.appendChild(newMovie);
        newMovie.appendChild(newMovieLink);
        newMovieLink.appendChild(newMovieImg);
        
        n++;
    };
};

const parentFilmlijst = document.getElementById("overzicht");
showFilm (movies);

//Filterfuncties:
const filterMovieYear = () => {
    let search = document.getElementById("search");
    search.value = "";
    const filteredMovieYear = movies.filter((movie) => { 
    return movie.year >= 2014;  
    });
    showFilm (filteredMovieYear);
};  

const filterMovieName =function(event) {
    let search = document.getElementById("search");
    search.value = "";
    let name = event.target.id;
    const filteredMovieName = movies.filter((movie) => {
        return movie.title.includes(name);        
    });
    console.log(filteredMovieName);
    showFilm (filteredMovieName);
};

//EVENTLISTENERS:
const selectieNamen = document.querySelectorAll(".naamSelectie");
selectieNamen.forEach(selectieNaam => {
    selectieNaam.addEventListener('click', filterMovieName);
});

const nieuweFilms = document.querySelector("#latest");
nieuweFilms.addEventListener("click", filterMovieYear);

//Bonus:

const search = document.getElementById("search");

search.addEventListener("input", e => {
    
    var radio = document.getElementsByName("quickSelection");
    for(var i=0;i<radio.length;i++)
      radio[i].checked = false;
    const value = e.target.value.toLowerCase();
    const filteredMovieSearch = movies.filter((movie) => {
        movieTitle = movie.title.toLowerCase();
        return movieTitle.includes(value);
    });
    console.log(filteredMovieSearch);
    showFilm (filteredMovieSearch);
});
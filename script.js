var input = document.getElementsByTagName("input")[0];
var button = document.getElementsByTagName('input')[1];
var column = document.getElementById("center_column");

button.addEventListener("click",function(){
  var search = input.value;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(request.status < 400 && request.readyState === 4){
      var response = JSON.parse(request.responseText).Search;
      for (var movie in response){
        var title = document.createElement("h5");
        var poster = document.createElement("img");
        title.innerHTML = response[movie].Title;
        poster.src = response[movie].Poster;
        poster.className = "movie_poster";
        console.log(poster)
        column.appendChild(title);
        column.appendChild(poster);
      }
    }
  }
  request.open("GET", 'http://www.omdbapi.com/?s=' + search);
  request.send();
});

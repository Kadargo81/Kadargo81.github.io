$(document).ready(function(){
  getData();
});

$("button").click(function(){
  getData();
});

// I am sure there is a better way than storing the response in a document script but this works so...
function getData() { var script = document.createElement("script"); script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=displayData"; document.getElementsByTagName("head")[0].appendChild(script); }

function displayData(response) {
   $("h1").text(response.quoteText);
   $("#author").text("~ "+response.quoteAuthor);
  }

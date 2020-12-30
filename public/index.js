let baseURL = 'https://catfact.ninja/fact';

document.querySelector('#cat').addEventListener('click', function(event) {
  fetchQuote();
});

window.addEventListener('load', function(event) {
  fetchQuote();
});

function fetchQuote() {
  fetch(baseURL)
  .then(response => response.json())
  .then(json => displayQuote(json))
}

function displayQuote(json) {
  document.querySelector('.quoteBubble').innerHTML = json.fact;
}

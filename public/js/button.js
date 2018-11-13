function getNames() {
  fetch('https://async-workshops-api.herokuapp.com/people'
  )
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    addToPage(results);
  });
}

function addToPage(results) {
  var element = document.getElementById('names');
  var content = "<h2>And the names are...</h2><ul>";

  results.forEach(function (result) {
    content += `<li>${result.name}</li>`;
  });

  content += "</ul>";
  element.insertAdjacentHTML('afterbegin', content);
}

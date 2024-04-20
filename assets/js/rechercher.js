document.getElementById("search-button").addEventListener("click", function() {
  var searchValue = document.getElementById("search-input").value;
  if (searchValue != "") {
    var found = window.find(searchValue);
    if (!found) {
      alert("Aucun résultat trouvé pour: " + searchValue);
    }
  }
});

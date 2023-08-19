fetch("https://www.thecolorapi.com/id?hex=24B1E0")
  .then((response) => response.json())
  .then((data) => console.log(data));

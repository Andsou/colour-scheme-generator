const generateColourBtn = document.getElementById("colour-btn");
const colourInput = document.getElementById("colour-input");
const colourDropdown = document.getElementById("colour-dropdown");
const schemeColoursSection = document.getElementById("scheme-colours");

let colourArray = [];

const fetchColourData = function () {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colourInput.value.slice(
      1
    )}&mode=${colourDropdown.value}&count=5`
  )
    .then((response) => response.json())
    .then((colourData) => {
      colourArray = [];
      colourArray.push(colourData.colors);
      renderColourSchemes();
    });
};

const renderColourSchemes = function () {
  schemeColoursSection.innerHTML = "";

  const hexValues = colourArray.map((colourIndex) => {
    return colourIndex
      .map((colour) => {
        return `
        <div class="colour-block" style="--block-background-color: ${colour.hex.value};">
        
        </div>
        <p class="hex-colour">${colour.hex.value}</p>
      `;
      })
      .join("");
  });

  schemeColoursSection.innerHTML = hexValues;
};

generateColourBtn.addEventListener("click", fetchColourData);

fetchColourData();

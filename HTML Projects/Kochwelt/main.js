function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

let recipe = ["Pfannkuchen", 1, "Eier", 100, "g Mehl", 50, "g Zucker", 125, "g cream"];

function loadRecipe() {
  for (let i = 1; i < recipe.length; i += 2) {
    document.getElementById('ingredients').innerHTML += `<p class="ingredient">${recipe[i]} ${recipe[i + 1]}</p>`;
  }
}

function calcingredients() {
  let numpeople = +document.getElementById('numpeople').value;
  document.getElementById('ingredients').innerHTML = ``;
  for (let i = 1; i < recipe.length; i += 2) {
    document.getElementById('ingredients').innerHTML += `<p class="ingredient">${recipe[i] * numpeople} ${recipe[i + 1]}</p>`;
  }
}

// import { recipe1 } from 'recipedata.js';

let recipe1 = {
  "name": "Mini-Croissants",
  "image": "03 - Gruppenarbeit - Kochwelt/img/croissant.jpg",
  "description": "Der leckere Snack für zwischendurch",
  "creator": "Felix Pan",
  "ranking": 4,
  "prep-time": 15,
  "difficulty": "einfach"
}
let recipe2 = {
  "name": "Mini-Croissants",
  "image": "03 - Gruppenarbeit - Kochwelt/img/croissant.jpg",
  "description": "Der leckere Snack für zwischendurch",
  "creator": "Felix Pan",
  "ranking": 4,
  "prep-time": 15,
  "difficulty": "einfach"
}

let recipeList = [recipe1, recipe2];

function loadallrecipes() {
  for (i = 0; i < recipeList.length; i++) {

    document.getElementById('recipe-container').innerHTML += `

    <div class="recipe">
    <a href="#"><img src=${recipe1["image"]}></a>
    <a href="#">
        <h5>${recipe1["name"]}</h5>
    </a>
    <p>${recipe1["description"]}</p>
    <p style="font-weight: bold;">von ${recipe1["creator"]}</p>

    <div class="reviewstars">
        <img src="03 - Gruppenarbeit - Kochwelt/img/icons/star-2-48.png" alt="">
        <img src="03 - Gruppenarbeit - Kochwelt/img/icons/star-2-48.png" alt="">
        <img src="03 - Gruppenarbeit - Kochwelt/img/icons/star-2-48.png" alt="">
        <img src="03 - Gruppenarbeit - Kochwelt/img/icons/star-2-48.png" alt="">
    </div>
    <div class="recipe-icons">
        <div class="tag">
            <img src="03 - Gruppenarbeit - Kochwelt/img/icons/clock-regular.svg" alt="">
            <p>${recipe1["prep-time"]} Min</p>
        </div>
        <div class="tag">
            <img src="03 - Gruppenarbeit - Kochwelt/img/icons/brain-solid.svg" alt="">
            <p>${recipe1["difficulty"]}</p>
        </div>
    </div>
  </div>

  `;
  }

}

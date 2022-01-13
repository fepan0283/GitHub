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
let recipeList = [
  {
    "name": "Mini-Croissants",
    "image": "03-Gruppenarbeit-Kochwelt/img/croissant.jpg",
    "description": "Der leckere Snack für zwischendurch",
    "creator": "Felix Pan",
    "ranking": 4,
    "prep-time": 15,
    "difficulty": "einfach",
    "create-date": "13.01.2022",
    "ingredients": ["Pfannkuchen", 1, "Eier", 100, "g Mehl", 50, "g Zucker", 125, "g cream"]
  },
  {
    "name": "deftige Knödel",
    "image": "03 - Gruppenarbeit - Kochwelt/img/croissant.jpg",
    "description": "ein ganz schön schwere Mittagessen",
    "creator": "Michael Pan",
    "ranking": 3,
    "prep-time": 35,
    "difficulty": "mittel",
    "ingredients": [10, "Eier", 100, "g Mehl", 50, "g Zucker", 125, "g cream"]
  },
  {
    "name": "Pfannkuchen",
    "image": "03 - Gruppenarbeit - Kochwelt/img/croissant.jpg",
    "description": "für ein schnelles Mittagessen für die ganze Familie",
    "creator": "Nicoline Pan",
    "ranking": 5,
    "prep-time": 25,
    "difficulty": "einfach",
    "ingredients": [100, "Eier", 100, "g Mehl", 50, "g Zucker", 125, "g cream"]
  }
]

let recipe = [10, "Eier", 100, "g Mehl", 50, "g Zucker", 125, "g cream"];

function loadRecipe(recipechoice) {
  for (let i = 1; i < recipeList[recipechoice]["ingredients"].length; i += 2) {
    document.getElementById('ingredients').innerHTML += `<p class="ingredient">${recipeList[recipechoice]["ingredients"][i]} ${recipeList[recipechoice]["ingredients"][i + 1]}</p>`;
  }
}

function calcingredients(recipechoice) {
  let numpeople = +document.getElementById('numpeople').value;
  document.getElementById('ingredients').innerHTML = ``;
  for (let i = 1; i < recipeList[recipechoice]["ingredients"].length; i += 2) {
    document.getElementById('ingredients').innerHTML += `<p class="ingredient">${recipeList[recipechoice]["ingredients"][i] * numpeople} ${recipeList[recipechoice]["ingredients"][i + 1]}</p>`;
  }
}


function loadallrecipes() {
  for (i = 0; i < recipeList.length; i++) {

    document.getElementById('recipe-container').innerHTML += `

    <div id="recipe" class="recipe">
    <a href="#" onclick="openrecipechoice(2)"><img src=${recipeList[i]["image"]}></a>
    <a href="#" onclick="openrecipechoice(2)"><h5>${recipeList[i]["name"]}</h5></a>
    <p>${recipeList[i]["description"]}</p>
    <p style="font-weight: bold;">von ${recipeList[i]["creator"]}</p>

    <div id="ranking${i}" class="reviewstars">
    </div>
    <div class="recipe-icons">
        <div class="tag">
            <img src="03 - Gruppenarbeit - Kochwelt/img/icons/clock-regular.svg" alt="">
            <p>${recipeList[i]["prep-time"]} Min</p>
        </div>
        <div class="tag">
            <img src="03 - Gruppenarbeit - Kochwelt/img/icons/brain-solid.svg" alt="">
            <p>${recipeList[i]["difficulty"]}</p>
        </div>
    </div>
  </div>

  `;
  }
  updatestars()
}

function updatestars() {
  for (j = 0; j < recipeList.length; j++) {
    for (i = 0; i < recipeList[j]["ranking"]; i++) {
      document.getElementById(`ranking${j}`).innerHTML += `<img src="03 - Gruppenarbeit - Kochwelt/img/icons/star-2-48.png" alt="">`;
    }
  }
}

function openrecipechoice(recipechoice) {
  open("recipechoice.html")
  document.getElementById('recipe-container-test').innerHTML = `<p>${recipeList[recipechoice]["ingredients"][0]}</p>`;
}
function displayDescription (id) {
    let number = id.slice(-1);
    document.getElementById('employee-description' + number).style.opacity = 1;
}

function hideDescription (id) {
    let number = id.slice(-1);
    document.getElementById('employee-description'+ number).style.opacity = 0;
}

function showMobileMenu() {
  document.getElementById('mobile-nav').classList.remove('d-none');
  document.getElementById('mobile-nav').style.right = 0;
  document.getElementById('menu-icon').classList.add('rotated-menu-icon');
}






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
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
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
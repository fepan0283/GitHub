function hideMenu() {
    const contentcontainer = document.querySelector('.content-container');
    const menucontainer = document.querySelector('.menu-container');
    const menuicon = document.querySelector(".menuicon");
    menuicon.style.transform = 'rotate(0deg)';
    contentcontainer.style.marginLeft = "0";
    menucontainer.style.left = "-200px"
}

function showMenu() {
    const contentcontainer = document.querySelector('.content-container');
    const menucontainer = document.querySelector('.menu-container');
    const menuicon = document.querySelector(".menuicon");
    menuicon.style.transform = 'rotate(-90deg)';
    contentcontainer.style.marginLeft = "200px";
    menucontainer.style.left = "0"
}
let check = 0;

function openCloseMenu() {

    if (check === 0) {
        showMenu();
        check++;
    }
    else {
        hideMenu();
        check = 0;
    }
}

function readySearchItem() {
    let searchitem = document.getElementById('searchitem').value;
    searchitem = searchitem.toLowerCase();
    searchitem = searchitem.replace(/ /g,'%20');
    finalurl = `https://imdb8.p.rapidapi.com/auto-complete?q=${searchitem}`
    console.log(finalurl);
}

function fetchData() {
    let searchitem = document.getElementById('searchitem').value;
    // document.getElementById('resultitem').innerHTML = `Results for ${searchitem}`;
    resultitem = searchitem.toLowerCase();
    resultitem = searchitem.replace(/ /g,'%20');
    finalurl = `https://imdb8.p.rapidapi.com/auto-complete?q=${resultitem}`

    fetch(`${finalurl}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "b86e55e10dmsh7a559518bcb6b9ap1c5b64jsn58b83375337e"
        }
    })
        .then(response => response.json())
        .then(data => {
            const list = data.d;
            document.querySelector('.all-movies-container').innerHTML = "";
            document.querySelector('#resultitem').innerHTML = `Results for "${searchitem}"`;
            list.map((item) => {
                const name = item.l;
                const poster = item.i.imageUrl;
                const year = item.y;
                const starring = item.s;
                const movie = `
                
                <div class="movie-container movie${item}">
                    <img src="${poster}" alt="">
                    <h2>${name}</h2>
                    <h5>${year}</h5>
                    <p>Starring: <span>${starring}</span></p>
                    <button>Rent</button>
                </div>
                
                `;
                document.querySelector('.all-movies-container').innerHTML += movie
            })
        })
        .catch(err => {
            console.error(err);
        });
    }



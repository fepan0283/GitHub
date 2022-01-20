let pictures = [
    "/gallerypics/1.jpg",
    "/gallerypics/2.jpg",
    "/gallerypics/3.jpg",
    "/gallerypics/4.jpg",
    "/gallerypics/5.jpg",
    "/gallerypics/6.jpg",
    "/gallerypics/7.jpg",
    "/gallerypics/8.jpg",
    "/gallerypics/9.jpg",
    "/gallerypics/1.jpg",
];

function loadAllImages() {
    for (i = 0; i < pictures.length; i++) {
        document.getElementById("picture-container").innerHTML += `
        <div onclick="zoomInPicture(this.id)" id="picture${i}"  class="image-container">
            <img src="${pictures[i]}">
            <div class="image-hover" </div>
        </div>
        `;
    }
}

function zoomInPicture(id) {
    let pictureId = id.slice(-1);
    console.log(id);
    document.getElementById('zoomed-picture').src = pictures[pictureId];
    document.getElementById('zoom-picture-container').classList.remove("d-none");
}

function closeZoomPicture() {
    document.getElementById('zoom-picture-container').classList.add("d-none");
}

// function mit rechts und links Pfeilen
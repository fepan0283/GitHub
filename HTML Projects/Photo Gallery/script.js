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
];

function loadAllImages() {
    for (i = 0; i < pictures.length; i++) {
        document.getElementById("picture-container").innerHTML += `
        <img src="${pictures[i]}">
        
        
        
        `;
    }
}

let popup = document.querySelector(".modal-form");
let modalButton = document.querySelector(".modal-button");
let map = document.querySelector("img.map");
let frame = document.querySelector("iframe.map")

popup.classList.remove("modal-show")
map.classList.add("map-hidden");
frame.classList.remove("map-hidden");

modalButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    }
    }
});


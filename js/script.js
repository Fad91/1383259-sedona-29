let popup = document.querySelector(".modal-form");
let modalButton = document.querySelector(".modal-button");

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
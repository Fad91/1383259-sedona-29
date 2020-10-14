let popup = document.querySelector(".modal-form");
let modalButton = document.querySelector(".modal-button");

modalButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});
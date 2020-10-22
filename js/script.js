let popup = document.querySelector(".modal-form");
let modalButton = document.querySelector(".modal-button");
let map = document.querySelector("img.map");
let frame = document.querySelector("iframe.map")
let arrivalInput = document.querySelector(".tour-date-input");
let departureInput = document.querySelector(".departure-input");
let adultCount = document.querySelector(".tourist-counter-input");
let kidsCount = document.querySelector(".kids-count-input");
let seacrhButton = document.querySelector(".search-button");

popup.classList.remove("modal-show")
map.classList.add("map-hidden");
frame.classList.remove("map-hidden");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});

arrivalInput.value = arrivalInput.textContent;
departureInput.value = departureInput.textContent;
adultCount.value = adultCount.textContent;
kidsCount.value = kidsCount.textContent;

seacrhButton.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!arrivalInput.value || !departureInput.value || !adultCount.value || !kidsCount.value) {
    popup.classList.add("modal-error");
  }
});

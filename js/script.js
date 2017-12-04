var page = document.querySelector(".page");

var controlItem_1 = document.querySelector(".stock-slider_control-item--1");
var controlItem_2 = document.querySelector(".stock-slider_control-item--2");
var controlItem_3 = document.querySelector(".stock-slider_control-item--3");

var slide_1 = document.querySelector(".stock-slider_slide--1");
var slide_2 = document.querySelector(".stock-slider_slide--2");
var slide_3 = document.querySelector(".stock-slider_slide--3");

var feedback_btn = document.querySelector(".contacts_btn");
var pop_up = document.querySelector(".pop-up");
var overlay = document.querySelector(".overlay");
var pop_up_close = document.querySelector(".pop-up_close");
var storageName = localStorage.getItem("Name");
var storageEmail = localStorage.getItem("Email");
var user_name = pop_up.querySelector("[name=user-name]");
var user_email = pop_up.querySelector("[name=email]");
var user_message = pop_up.querySelector("[name=message]");

var contact_map_img = document.querySelector(".contact_map--img");


contact_map_img.classList.add("visually-hidden");

function clearControls() {
	controlItem_1.classList.remove("stock-slider_control-item--active");
	controlItem_2.classList.remove("stock-slider_control-item--active");
	controlItem_3.classList.remove("stock-slider_control-item--active");
}

function clearSlides() {
	slide_1.classList.remove("stock-slider_slide--active");
	slide_2.classList.remove("stock-slider_slide--active");
	slide_3.classList.remove("stock-slider_slide--active");
}


controlItem_1.addEventListener("click", function() {
	clearControls();
	controlItem_1.classList.add("stock-slider_control-item--active");
	clearSlides();
	slide_1.classList.add("stock-slider_slide--active");
	page.style.backgroundColor = "#849d8f";
});

controlItem_2.addEventListener("click", function() {
	clearControls();
	controlItem_2.classList.add("stock-slider_control-item--active");
	clearSlides();
	slide_2.classList.add("stock-slider_slide--active");
	page.style.backgroundColor = "#8996a6";
});

controlItem_3.addEventListener("click", function() {
	clearControls();
	controlItem_3.classList.add("stock-slider_control-item--active");
	clearSlides();
	slide_3.classList.add("stock-slider_slide--active");
	page.style.backgroundColor = "#9d8b84" ;
});

feedback_btn.addEventListener("click", function(evt) {
	evt.preventDefault();
	pop_up.classList.remove("pop-up--error");
	overlay.classList.add("overlay--show");
	pop_up.classList.add("pop-up--show");
	
	if (storageName) {
		user_name.value = storageName;
		user_email.focus();
    } else if (storageEmail) {
		user_email.value = storageEmail;
		user_message.focus();
    }
});

pop_up.addEventListener("submit", function (evt) {
	if (!user_name.value || !user_email.value || !user_message.value) {
      evt.preventDefault();
      pop_up.classList.remove("pop-up--error");
      pop_up.offsetWidth = pop_up.offsetWidth;
      pop_up.classList.add("pop-up--error");
    } else {
		localStorage.setItem("Name", user_name.value);
		localStorage.setItem("Email", user_email.value);
    }
});

pop_up_close.addEventListener("click", function() {
	overlay.classList.remove("overlay--show");
	pop_up.classList.remove("pop-up--show");
});

overlay.addEventListener("click", function() {
	overlay.classList.remove("overlay--show");
	pop_up.classList.remove("pop-up--show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (pop_up.classList.contains("pop-up--show")) {
			pop_up.classList.remove("pop-up--show");
			pop_up.classList.remove("pop-up--error");
			overlay.classList.remove("overlay--show");
		}
	}
});


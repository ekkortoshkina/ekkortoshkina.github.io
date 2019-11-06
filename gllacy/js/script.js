var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopap = document.querySelector(".feedback-modal");
var feedbackOverlay = document.querySelector(".feedback-wrapper");
var feedbackClose = document.querySelector(".modal-close");
var feedbackForm = feedbackPopap.querySelector("form");

var name = feedbackPopap.querySelector("[type=text]");
var email = feedbackPopap.querySelector("[name=feedback-email]");
var nameStorage = localStorage.getItem("storage-name");
var emailStorage = localStorage.getItem("storage-email");

feedbackLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackPopap.classList.add("modal-show");
	feedbackOverlay.classList.add("modal-overlay");
	name.focus();
	if (storage-email) {
		email.value = storage-email;
	}
});

feedbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackPopap.classList.remove("modal-show");
	feedbackOverlay.classList.remove("modal-overlay");
	feedbackForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopap.classList.contains("modal-show")) {
			feedbackPopap.classList.remove("modal-show");
			feedbackOverlay.classList.remove("modal-overlay");
			feedbackForm.classList.remove("modal-error");
		}
	}
});

feedbackForm.addEventListener("submit", function(evt) {
	if ( !email.value) {
		evt.preventDefault();
		feedbackForm.classList.add("modal-error");
	} else {
//		localStorage.setItem("storage-name", name.value);
		localStorage.setItem("storage-email", email.value);
	}
});










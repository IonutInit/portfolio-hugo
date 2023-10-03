"use strict";

// contact form

const form = document.getElementById("js-contactForm");
const submitButton = document.getElementById("js-submit");
submitButton.disabled = false;

window.submitForm = () => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("accept", "application/json");
  xhr.send(formData);

  xhr.timeout = 8000;
  xhr.ontimeout = () => {
    console.error("timeout");
    message(false, "There's been a connection error. Please try again later.");
  };

  xhr.onloadend = () => {
    const response = JSON.parse(xhr.response);

    if (response.success) {
      message(true, "Message sent");
    } else {
      message(false, "Oops, something went wrong...");
    }
  };
};

const message = (status, statusText) => {
  const color = status ? "bg-lime-600" : "bg-orange-600";
  submitButton.textContent = statusText;
  submitButton.classList.add(color);
  if (status) {
    submitButton.disabled = true;
  }
  resetForm(color);
};

const resetForm = (color) => {
  form.reset();
  setTimeout(() => {
    submitButton.textContent = "Submit";
    submitButton.classList.remove(color);
    submitButton.disabled = false;
  }, 5000);
  // grecaptcha.reset()
};

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    // event.stopPropagation()

    if (form.checkValidity()) {
      submitForm();
      // grecaptcha.execute()
    }
  },
  false,
);

// footer
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const footer = document.getElementById("footer");
const handleFooterMode = (mode) => {
  if (mode.matches) {
    footer.classList.remove("bg-gray-900");
  } else {
    footer.classList.add("bg-gray-900");
  }
};

handleFooterMode(darkModeQuery);

darkModeQuery.addListener(handleFooterMode);

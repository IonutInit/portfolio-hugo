"use` strict";

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
  const color = status ? "#65a30d" : "#ea580c";
  submitButton.textContent = statusText;
  submitButton.style.backgroundColor = color;
  submitButton.disabled = true;
  resetForm(status);
};

const resetForm = (status) => {
  if (status) {
    form.reset();
  }
  setTimeout(() => {
    submitButton.textContent = "Submit";
    submitButton.style.backgroundColor = "";
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

(() => {
  var s = document.getElementById("js-contactForm"),
    o = document.getElementById("js-submit");
  o.disabled = !1;
  window.submitForm = () => {
    let t = new FormData(s),
      e = new XMLHttpRequest();
    e.open(s.method, s.action),
      e.setRequestHeader("accept", "application/json"),
      e.send(t),
      (e.timeout = 8e3),
      (e.ontimeout = () => {
        console.error("timeout"),
          r(!1, "There's been a connection error. Please try again later.");
      }),
      (e.onloadend = () => {
        let n = JSON.parse(e.response);
        n.success
          ? r(!0, "Message sent")
          : r(!1, "Oops, something went wrong...");
      });
  };
  var r = (t, e) => {
      let n = t ? "#65a30d" : "#ea580c";
      (o.textContent = e),
        (o.style.backgroundColor = n),
        (o.disabled = !0),
        a(t);
    },
    a = (t) => {
      t && s.reset(),
        setTimeout(() => {
          (o.textContent = "Submit"),
            (o.style.backgroundColor = ""),
            (o.disabled = !1);
        }, 5e3);
    };
  s.addEventListener(
    "submit",
    (t) => {
      t.preventDefault(), s.checkValidity() && submitForm();
    },
    !1,
  );
})();

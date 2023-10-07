(() => {
  var s = document.getElementById("js-contactForm"),
    o = document.getElementById("js-submit");
  o.disabled = !1;
  window.submitForm = () => {
    let e = new FormData(s),
      t = new XMLHttpRequest();
    t.open(s.method, s.action),
      t.setRequestHeader("accept", "application/json"),
      t.send(e),
      (t.timeout = 8e3),
      (t.ontimeout = () => {
        console.error("timeout"),
          r(!1, "There's been a connection error. Please try again later.");
      }),
      (t.onloadend = () => {
        let n = JSON.parse(t.response);
        n.success
          ? r(!0, "Message sent")
          : r(!1, "Oops, something went wrong...");
      });
  };
  var r = (e, t) => {
      let n = e ? "#65a30d" : "#ea580c";
      (o.textContent = t),
        (o.style.backgroundColor = n),
        (o.disabled = !0),
        i(e);
    },
    i = (e) => {
      e && s.reset(),
        setTimeout(() => {
          (o.textContent = "Submit"),
            (o.style.backgroundColor = ""),
            (o.disabled = !1);
        }, 5e3);
    };
  s.addEventListener(
    "submit",
    (e) => {
      e.preventDefault(), s.checkValidity() && submitForm();
    },
    !1,
  );
  var a = window.matchMedia("(prefers-color-scheme: dark)"),
    c = document.getElementById("footer"),
    d = (e) => {
      e.matches
        ? c.classList.remove("bg-gray-900")
        : c.classList.add("bg-gray-900");
    };
  d(a);
  a.addListener(d);
})();

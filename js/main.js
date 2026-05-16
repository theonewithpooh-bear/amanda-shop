/* Hygge Tygge — small, quiet interactions. */
(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu after choosing a destination.
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* ---- Newsletter signup ----
     Front-end acknowledgement only. Wire the form to your email platform
     (Mailchimp, Klaviyo, Flodesk...) by POSTing `email` to its endpoint. */
  var form = document.querySelector("[data-newsletter]");
  var msg = document.querySelector("[data-newsletter-msg]");

  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector("input[type=email]");
      if (!email || !email.value) return;
      msg.textContent = "Welcome to the Hygge Circle.";
      form.reset();
    });
  }

  /* ---- Instagram feed ----
     The .insta-grid tiles are styled placeholders. To show the live grid:
       1. Obtain media via the Instagram Basic Display API (or an embed
          service such as Behold / EmbedSocial).
       2. Replace renderFeed() below to inject real tiles, e.g.:
            grid.innerHTML = posts.map(function (p) {
              return '<a class="insta-tile" href="' + p.permalink + '">' +
                     '<img src="' + p.media_url + '" alt="' + p.caption + '"></a>';
            }).join("");
  */
  function renderFeed(/* posts */) {
    var grid = document.querySelector("[data-insta-grid]");
    if (!grid) return;
    // Placeholder tiles already in the markup — nothing to do until the
    // API credentials are connected.
  }
  renderFeed();
})();

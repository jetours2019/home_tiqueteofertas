/*
Clave cleinte:  ck_90756cec765146266bc21ca81d670890ccd5d5c2
Clave secreta:  cs_f61ad5c03dbc1d92802bbc5f3086bfa7f106164a
*/

/*Toggle Menu*/
var menu = document.getElementById("c-menu-movil");
var menu2 = document.getElementById("c-menu-movil2");
var menuMovil = document.getElementById("c-menu");
menu.addEventListener(
  "click",
  function (event) {
    menuMovil.classList.toggle("c-show-menu");
    menu.classList.toggle("c-menu-close");
  },
  false
);
menu2.addEventListener(
  "click",
  function (event) {
    menuMovil.classList.toggle("c-show-menu");
    menu.classList.toggle("c-menu-close");
  },
  false
);

/*Stiky Menu*/
(() => {
  "use strict";

  let refOffset = 0;
  const bannerHeight = 127;
  const bannerWrapper = document.querySelector(".c-top-nav");
  const banner = document.querySelector(".c-logo");

  const imgLogo = document.getElementById("c-logo-img");
  const TextImgLogo = imgLogo.getAttribute("src");
  const newTextImgLogo = TextImgLogo.replace(".svg", "");

  const Logo1 = document.getElementById("c-logo-1");
  const TextLogo1 = Logo1.getAttribute("src");
  const newTextLogo1 = TextLogo1.replace(".svg", "");

  const Logo2 = document.getElementById("c-logo-2");
  const TextLogo2 = Logo2.getAttribute("src");
  const newTextLogo2 = TextLogo2.replace(".svg", "");

  const Logo3 = document.getElementById("c-logo-3");
  const TextLogo3 = Logo3.getAttribute("src");
  const newTextLogo3 = TextLogo3.replace(".svg", "");

  const Logo4 = document.getElementById("c-logo-4");
  const TextLogo4 = Logo4.getAttribute("src");
  const newTextLogo4 = TextLogo4.replace(".svg", "");

  const Logo5 = document.getElementById("c-logo-5");
  const TextLogo5 = Logo5.getAttribute("src");
  const newTextLogo5 = TextLogo5.replace(".svg", "");

  const Logo6 = document.getElementById("c-logo-6");
  const TextLogo6 = Logo6.getAttribute("src");
  const newTextLogo6 = TextLogo6.replace(".svg", "");

  const handler = () => {
    const newOffset = window.scrollY || window.pageYOffset;

    if (newOffset > bannerHeight) {
      if (newOffset > refOffset) {
      } else {
      }
      bannerWrapper.classList.add("c-top-nav-fixed");
      imgLogo.setAttribute("src", "" + newTextImgLogo + "_.svg");
      if (screen.width > 560) {
        Logo1.setAttribute("src", "" + newTextLogo1 + "_.svg");
        Logo2.setAttribute("src", "" + newTextLogo2 + "_.svg");
        Logo3.setAttribute("src", "" + newTextLogo3 + "_.svg");
        Logo4.setAttribute("src", "" + newTextLogo4 + "_.svg");
        Logo5.setAttribute("src", "" + newTextLogo5 + "_.svg");
        Logo6.setAttribute("src", "" + newTextLogo6 + "_.svg");
      }
      refOffset = newOffset;
    } else {
      bannerWrapper.classList.remove("c-top-nav-fixed");
      imgLogo.setAttribute("src", "" + newTextImgLogo + ".svg");
      Logo1.setAttribute("src", "" + newTextLogo1 + ".svg");
      Logo2.setAttribute("src", "" + newTextLogo2 + ".svg");
      Logo3.setAttribute("src", "" + newTextLogo3 + ".svg");
      Logo4.setAttribute("src", "" + newTextLogo4 + ".svg");
      Logo5.setAttribute("src", "" + newTextLogo5 + ".svg");
      Logo6.setAttribute("src", "" + newTextLogo6 + ".svg");
    }
  };

  window.addEventListener("scroll", handler, false);
})();

/*API Woocommerce*/
DOMAIN = "https://viajes.tiqueteofertas.com";
SITE = `${DOMAIN}/wp-json/wc/v2/products`;

function getSiteData() {
  let div_slides = document.getElementById("slides");
  let div_posts = document.getElementById("posts");
  fetch(SITE, {
    headers: new Headers({
      Authorization:
        "Basic " +
        btoa(
          "ck_90756cec765146266bc21ca81d670890ccd5d5c2:cs_f61ad5c03dbc1d92802bbc5f3086bfa7f106164a"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      var htmlResponse = "";
      json.forEach((resultado) => {
        if (resultado.name) {
          var destino = resultado.attributes.filter(function (atributo) {
            return atributo.name == "Ciudad destino" && atributo.visible;
          });
          destino = destino[0] ? destino[0].options[0] : "...";

          htmlResponse += `
                <li class="glide__slide">
                <a target="_blank" href="${resultado.permalink}">
                    <div class="c-destacado">
                    INCLUYE <img src="assets/img/ico-vuelos.svg" alt=""> + <img src="assets/img/ico-vuelosplus.svg" alt=""> 
                    </div>
                    <img src="${resultado.images[0].src}" alt="">
                    <div class="c-side-attr">
                        <div> <img src="./assets/img/ico-noches.svg" alt=""> <span>3 Noches</span></div>
                        <div> <img src="./assets/img/ico-users.svg" alt=""> <span>2 Adultos</span></div>
                        <div> <img src="./assets/img/ico-location.svg" alt=""> <span> ${destino} </span></div>
                    </div>
                    <div class="c-content-slide">
                        <h2>${resultado.name}</h2>
                        <p>${resultado.short_description}</p>
                    </div>

                    <div class="c-details">
                        <section>
                            Calificación
                            <div class="c-rate">
                            <img src="./assets/img/Star8.svg" alt="">
                            <img src="./assets/img/Star8.svg" alt="">
                            <img src="./assets/img/Star8.svg" alt="">
                            <img src="./assets/img/Star8.svg" alt="">
                            <img src="./assets/img/Star11.svg" alt="">
                            </div>                            
                        </section>
                        <section>
                            <div class="c-price">
                                <span>$${resultado.regular_price}</span>
                                <b>$${resultado.price}</b>
                            </div>
                        </section>
                    </div>
                </a>
                </li>
                `;
        }
      });
      div_slides.innerHTML = htmlResponse;
      var glide = new Glide("#intro", {
        type: "carousel",
        perView: 3,
        focusAt: "center",
        gap: 100,
        breakpoints: {
          800: {
            perView: 2,
          },
          480: {
            perView: 2,
            gap: 10,
          },
        },
      });
      glide.mount();
    })

    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      div_site.innerHTML = `<p> Error ${err.status}: ${message}  </p>`;
    });
}

document.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
});


/*
Clave cleinte:  ck_90756cec765146266bc21ca81d670890ccd5d5c2
Clave secreta:  cs_f61ad5c03dbc1d92802bbc5f3086bfa7f106164a
*/




DOMAIN = "https://viajes.tiqueteofertas.com";
SITE = `${DOMAIN}/wp-json/wc/v2/products`;

function getSiteData(){

    let div_slides = document.getElementById("slides");
    let div_posts = document.getElementById("posts");
    fetch(SITE,{
        headers: new Headers({
          'Authorization': 'Basic '+btoa('ck_90756cec765146266bc21ca81d670890ccd5d5c2:cs_f61ad5c03dbc1d92802bbc5f3086bfa7f106164a'), 
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json);
        var htmlResponse = ""
        json.forEach(resultado => {
            if (resultado.name) {
                htmlResponse += `
                <li class="glide__slide"><img src="${resultado.images[0].src}" alt=""><br><p>"${resultado.name}"</p></li>
                `;
            }
        })
        div_slides.innerHTML = htmlResponse;  
        var glide = new Glide('#intro', {
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            breakpoints: {
                800: {
                    perView: 2
                },
                480: {
                    perView: 1
                }
            }
        })
        glide.mount()  
    })

    .catch(err => {
        console.log(err);
        let message = err.statusText||"Ocurrio un error";
        div_site.innerHTML = `<p> Error ${err.status}: ${message}  </p>`
    });
}

document.addEventListener("DOMContentLoaded", e =>{
   
    getSiteData();
    
})







 
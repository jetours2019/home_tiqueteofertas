
/*
Clave cleinte:  ck_90756cec765146266bc21ca81d670890ccd5d5c2
Clave secreta:  cs_f61ad5c03dbc1d92802bbc5f3086bfa7f106164a
*/




DOMAIN = "https://viajes.tiqueteofertas.com";
SITE = `${DOMAIN}/wp-json/wc/v2/products`;

function getSiteData(){

    let div_site = document.getElementById("site");
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
           htmlResponse += `
            <li class="glide__slide"><img src="${resultado.images[0].src}" alt=""><br><p>"${resultado.name}"</p></li>
        `;
        })
        div_site.innerHTML = htmlResponse;    
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







 
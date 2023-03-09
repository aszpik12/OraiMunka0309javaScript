window.addEventListener("load", main)


function main() {
    let lista = ["kepek/alszik.jpg", "kepek/bocsok.jpg", "kepek/cirkusz.jpg", "kepek/eszik.jpg"
    , "kepek/integet.jpg", "kepek/maci.jpg", "kepek/medve.jpg", "kepek/taj.jpg"];
    const article = document.querySelector("article");
    let i;
    for (i = 0; i < 4; i++) {
        article.innerHTML += `<div><img src="${lista[i]}" alt=""></div>`;
    }
    for (i = 4; i < lista.length; i++) {
        article.innerHTML += `<div><img src="${lista[i]}" alt=""></div>`;
    }
    const kep = document.querySelector("article div img");
    kep.addEventListener("click", function(){
       console.log(kep.src);
    })
}

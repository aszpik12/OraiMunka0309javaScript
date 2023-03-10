window.addEventListener("load", main);

function main() {
  let lista = [
    "kepek/alszik.jpg",
    "kepek/bocsok.jpg",
    "kepek/cirkusz.jpg",
    "kepek/eszik.jpg",
    "kepek/integet.jpg",
    "kepek/maci.jpg",
    "kepek/medve.jpg",
    "kepek/taj.jpg",
  ];
  const article = document.querySelector("article");
  let i;
  for (i = 0; i < lista.length; i++) {
    article.innerHTML += `<div><img src="${lista[i]}" alt=""></div>`;
  }
  let currentIndex = 0;
  const nagykep = document.querySelectorAll(".nagykep img")[0];
  const jobb = document.getElementsByClassName("jobb")[0];
  jobb.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > lista.length - 1) {
      currentIndex = 0;
    }
    nagykep.src = lista[currentIndex];
  });
  const bal = document.getElementsByClassName("bal")[0];
  bal.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = lista.length - 1;
    }
    nagykep.src = lista[currentIndex];
  });
  const kepek = document.querySelectorAll("article div img");
  for (let j = 0; j < kepek.length; j++) {
    kepek[j].addEventListener("click", function () {
      nagykep.src = this.src;
      currentIndex = j;
    });
  }
}

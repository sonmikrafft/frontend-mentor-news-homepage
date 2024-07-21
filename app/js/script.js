import data from '../../data.json' with { type: 'json' };

const newsList = document.getElementById('newsList');
const articlesList = document.getElementById('articlesList');

const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");

/*
* Helper Functions
* */
const appendNewsElement = (item, number) => {
    const element = document.createElement("li");
    element.classList.add("news__item");
    if (number < news.length - 1) {
        element.classList.add("item-separator");
    }

    element.innerHTML = `
    <a href="#"><h3>${item.title}</h3></a>
    <p>${item.description}</p>
    `
    newsList.appendChild(element);
}

const appendArticleElement = (item, number) => {
    const element = document.createElement("div");
    element.classList.add("article");

    const imgPath = "assets/images/image-" + item.imgPath + ".jpg";

    element.innerHTML = `
    <div class="article__image">
        <img src=${imgPath} alt=${item.imgAlt}>
    </div>
    <div class="article__text">
        <div class="article__number">${(number + 1).toString().padStart(2, '0')}</div>
        <a href="#"><b>${item.title}</b></a>
        <p>${item.description}</p>
    </div>
    `
    articlesList.appendChild(element);
}


/*
* Initialize
 */
const {news, articles} = data;
news.forEach((item, number) => (appendNewsElement(item, number)));
articles.forEach((item, number) => (appendArticleElement(item, number)));

/*
* Event Listeners
* */
btnHamburger.addEventListener("click", function () {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        fadeElems.forEach(function (elem) {
            elem.classList.add("fade-out");
            elem.classList.remove("fade-in");
        });
    } else {
        header.classList.add("open");
        fadeElems.forEach(function (elem) {
            elem.classList.add("fade-in");
            elem.classList.remove("fade-out");
        });
    }
});

window.addEventListener('resize', function() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    header.classList.remove("open");
    fadeElems.forEach(function (elem) {
        elem.classList.add("fade-out");
        elem.classList.remove("fade-in");
    });
});
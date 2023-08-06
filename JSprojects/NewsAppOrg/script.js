"use strict";

const searchBar = document.querySelector(".search-bar");

let keyword = "";
let country = "country=us&"; // country=us&
let category = "category=technology&"; // category=business&
let url = "";

const searchBtn = document.querySelector(".search-btn");

const categories = document.querySelectorAll(".category");
categories.forEach((element) => {
  element.addEventListener("click", function () {
    // alert("clicked");
    category = "category=" + element.innerHTML.toLowerCase() + "&";
    setURL();
    getData();
  });
});

//#region TheNewsApi.com
// const token = "api_token=Pp3ewkIHZVqjgbNLSfh3kPQXhcdIk3BQio8qvZJj";

// let url =
//   "https://api.thenewsapi.com/v1/news/top?" +
//   token +
//   "&language=en&search='" +
//   keyword +
//   "'";

// if (keyword === "") {
//   url =
//     "https://api.thenewsapi.com/v1/news/top?api_token=Pp3ewkIHZVqjgbNLSfh3kPQXhcdIk3BQio8qvZJj&language=en";
// }
//#endregion

//#region NewsApi.org

const APIkey = "apiKey=2d51e0412500460f9003209d0aed765d";

function setURL() {
  url =
    "https://newsapi.org/v2/top-headlines?pageSize=100&sortBy=popularity&" +
    keyword +
    country +
    category +
    APIkey;
  // console.log(url);
}
setURL();
getData();
//#endregion

searchBtn.addEventListener("click", function () {
  SearchNow();
});
searchBar.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    SearchNow();
  }
});

function SearchNow() {
  if (searchBar.value === "") return;

  keyword = "q=" + searchBar.value + "&";
  searchBar.value = "";
  category = "";

  setURL();
  getData();
  country = "country=us&";
}

const newsBox = document.querySelector(".newsHolder");

async function getData() {
  // setURL();
  const response = await fetch(url);
  const news = await response.json();
  console.log(url);
  console.log(news);

  for (let i = 0; i < news.articles.length; i++) {
    const html = `
                <div class="col-md-6 col-lg-4 col-xl-3">
                  <div class="newsCard">
                      <div class="newsImage">
                          <img src="${news.articles[i].urlToImage}" alt="">
                      </div>
                      <div class="newsTitle">
                          <a href="${news.articles[i].url}" target="_blank">
                              <h3>${news.articles[i].title}</h3>
                          </a>
                      </div>
                      <div class="newsDescription">
                      <a href="${news.articles[i].url}" target="_blank">
                          <p>${news.articles[i].description}</p>
                      </a>
                      </div>
                  </div>
              </div>
  `;

    newsBox.insertAdjacentHTML("beforeend", html);
  }
}

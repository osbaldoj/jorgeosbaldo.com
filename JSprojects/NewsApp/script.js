"use strict";

const searchBar = document.querySelector(".search-bar");

let keyword = "";
let country = ""; // country=us&
let category = "categories=tech&"; // category=business&
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
const token = "api_token=Pp3ewkIHZVqjgbNLSfh3kPQXhcdIk3BQio8qvZJj";

function setURL() {
  url =
    "https://api.thenewsapi.com/v1/news/top?" +
    keyword +
    country +
    category +
    token;
}

//#endregion
//the news cathcer api
//const newApi = "MbKgTQ3hClXVYIJ0MEbdDxAwRacxxYw4fdMcyvYSBaM";
// curl -XGET 'https://api.newscatcherapi.com/v2/search?q=Tesla' -H 'x-api-key: MbKgTQ3hClXVYIJ0MEbdDxAwRacxxYw4fdMcyvYSBaM'

//api.newscatcherapi.com/v2/search?q=Tesla&x-api-key=MbKgTQ3hClXVYIJ0MEbdDxAwRacxxYw4fdMcyvYSBaM
//#region NewsApi.org

// const APIkey = "apiKey=2d51e0412500460f9003209d0aed765d";

// function setURL() {
//   url =
//     "https://newsapi.org/v2/top-headlines?pageSize=100&sortBy=popularity&" +
//     keyword +
//     country +
//     category +
//     APIkey;
//   // console.log(url);
// }
//#endregion

https: setURL();
getData();

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

  keyword = "search=" + searchBar.value + "&";
  searchBar.value = "";
  category = "";

  setURL();
  getData();
  country = "locale=us&";
}

const newsBox = document.querySelector(".newsHolder");

async function getData() {
  // setURL();
  const response = await fetch(url);
  const news = await response.json();
  console.log(url);
  console.log(news);

  for (let i = 0; i < news.data.length; i++) {
    const html = `
                <div class="col-md-6 col-lg-4 col-xl-3">
                  <div class="newsCard">
                      <div class="newsImage">
                          <img src="${news.data[i].image_url}" alt="">
                      </div>
                      <div class="newsTitle">
                          <a href="${news.data[i].url}" target="_blank">
                              <h3>${news.data[i].title}</h3>
                          </a>
                      </div>
                      <div class="newsDescription">
                      <a href="${news.data[i].url}" target="_blank">
                          <p>${news.data[i].snippet}</p>
                      </a>
                      </div>
                  </div>
              </div>
  `;

    newsBox.insertAdjacentHTML("beforeend", html);
  }
}

import "./style.css";
import { createCarts, createSourceFilter } from "./helper/domHelper";
import { api_sources, options_nba, url_nba } from "./api";

const divContainer = document.querySelector(".container");

const divContainerCards = document.createElement("div");
divContainerCards.classList.add("container-card");

const getNameFilters = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  const spanFilter = document.createElement("span");
  spanFilter.textContent = "Filter by source: ";

  const containerFilter = document.createElement("div");
  containerFilter.className = "container-filter";
  containerFilter.appendChild(spanFilter);

  const selectSourceTag = createSourceFilter(data);

  selectSourceTag.addEventListener("change", (event) => {
    let url =
      event.target.value === "all"
        ? url_nba
        : `${url_nba}?source=${event.target.value}`;
    getCards(url, options_nba);
  });

  containerFilter.appendChild(selectSourceTag);
  divContainer.appendChild(containerFilter);
};

const getCards = async (url, option) => {
  try {
    const response = await fetch(url, option);
    const data = await response.json();

    divContainerCards.innerHTML = "";
    divContainerCards.append(...createCarts(data));

    divContainer.appendChild(divContainerCards);
  } catch (error) {
    console.error(error);
  }
};

getNameFilters(api_sources);
getCards(url_nba, options_nba, "all");

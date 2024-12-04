export const createCarts = (datas) => {
  const card = datas.map((data) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = data.source;

    cardContent.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = data.title;

    const cardURL = document.createElement("p");
    cardURL.classList.add("card-description");
    cardURL.textContent = data.url;

    cardContent.append(cardDescription, cardURL);
    return card;
  });

  return card;
};

export const createSourceFilter = (data) => {
  const select = document.createElement("select");
  select.classList.add("styled-select");

  data.forEach((datas) => {
    const option = document.createElement("option");
    option.text = datas.name;
    
    if (datas.source === "all") option.selected = true;
    select.appendChild(option);
  });
  return select;
};
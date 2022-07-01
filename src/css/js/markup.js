export const markup = {
  setListCountryMarkup(item) {
    return `<li class="country-list-item">
    <img src="${item.flags.svg}" alt="Flag of ${item.name.common}" width="42" height="42" />
    <p class="country-list-name">${item.name.official}</p>
  </li>`;
  },
  setInfoCountryMarkup(item) {
    const languages = Object.values(item.languages).join(', ');
    return `
  <div class="country-info-wrapper">
      <img src="${item.flags.svg}" alt="Flag of ${item.name.common}" width="42" height="42" />
     <h2 class="country-info-name">${item.name.official}</h2>
   </div>
     <p class="country-info-text">
       Capital: <span class="country-info-desc"> ${item.capital}</span>
     </p>
     <p class="country-info-text">
       Population: <span class="country-info-desc">${item.population}</span>
     </p>
     <p class="country-info-text">
       Languages: <span class="country-info-desc">${languages}
       </span>
     </p>
 `;
  },
};

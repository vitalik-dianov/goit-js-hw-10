import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './css/js/fetchCountry';
import { markup } from './css/js/markup';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(e) {
  const countryName = e.target.value.trim();
  if (countryName !== '') {
    fetchCountries(countryName)
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.warning(
            'Too many matches found. Please enter a more specific name.'
          );
          clearCountryMarkup();
        } else if (10 >= data.length && data.length >= 2) {
          clearCountryMarkup();
          data.map(createCountryListMarkup);
        } else if (data.length === 1) {
          clearCountryMarkup();
          createCountryInfoMarkup(...data);
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        clearCountryMarkup();
      });
  } else clearCountryMarkup();
}

function createCountryListMarkup(item) {
  return countryListRef.insertAdjacentHTML(
    'beforeend',
    markup.setListCountryMarkup(item)
  );
}

function createCountryInfoMarkup(item) {
  return (countryInfoRef.innerHTML = markup.setInfoCountryMarkup(item));
}

function clearCountryMarkup() {
  countryInfoRef.innerHTML = '';
  countryListRef.innerHTML = '';
}

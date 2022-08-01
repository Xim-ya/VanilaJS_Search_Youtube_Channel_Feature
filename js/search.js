const search = document.querySelector('[data-search]');
// const searchBar = document.querySelector('[data-search = bar]');
const searchIcon = document.querySelector('[data-search = icon]');

const ACTIVE = 'active';


// 원형의 SearchBar을 클릭 했을 때
const onSearchBarTapHandler = (event) => {
    search.classList.toggle(ACTIVE);

};

search.addEventListener('click' , onSearchBarTapHandler);


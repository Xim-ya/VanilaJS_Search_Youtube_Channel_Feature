const searchIcon = document.querySelector('[data-search = icon]');
const searchBar = document.querySelector('[data-search = bar]');
const searchInput = document.querySelector('[data-search = input]');
const clearBtn = document.querySelector('[data-search = clearBtn]');


const ACTIVE = 'active';


// 원형의 SearchBar을 클릭 했을 때
const onSearchBarTapHandler = (event) => {
    event.preventDefault();
    searchInput.classList.toggle(ACTIVE);
    searchBar.classList.toggle(ACTIVE);
};

const onClearBtnTapHandler = (event) => {
    event.preventDefault();
    searchInput.classList.toggle(ACTIVE);
    searchBar.classList.toggle(ACTIVE);
};

searchIcon.addEventListener('click' , onSearchBarTapHandler);
clearBtn.addEventListener('click', onClearBtnTapHandler);



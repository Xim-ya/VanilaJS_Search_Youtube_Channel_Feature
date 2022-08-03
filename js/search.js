import {loadYoutubeChannelList} from "./youtube.js";

const searchIcon = document.querySelector('[data-search = icon]');
const searchBar = document.querySelector('[data-search = bar]');
const searchInputContainer = document.querySelector('[data-search = input_container]');
const searchInput = document.querySelector('[data-search = input]');
const clearBtn = document.querySelector('[data-search = clearBtn]');
const searchForm = document.querySelector('[data-search = form]');
const channelList = document.querySelector('[data-channel = list]');


const ACTIVE = 'active'; // Search Bar 애니메이션 Toggle 값.
const CHANNEL_LOADED = false; // 채널 정보 호출 여부



// 원형의 SearchBar을 클릭했을 때
const onSearchBarTapHandler = (event) => {
    event.preventDefault();
    searchInputContainer.classList.toggle(ACTIVE);
    searchBar.classList.toggle(ACTIVE);
};

// 'X' 버튼을 클릭했을 때
const onClearBtnTapHandler = (event) => {
    event.preventDefault();
    searchInput.value = ''; // Input Field 값 초기화
    searchInputContainer.classList.toggle(ACTIVE);
    searchBar.classList.toggle(ACTIVE);
};

// TODO: 필요한 기능인지 확인
// 'input'에 값 입력 되었을 때
const onTextInput = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
};



// 유튜브 채널 검색
const searchYoutubeChannel = (event) => {
    event.preventDefault();
    console.log("AIM");
    loadYoutubeChannelList();
};

const insertChannelItem = () => {
        

};


// const kakaoSign
searchIcon.addEventListener('click' , onSearchBarTapHandler);
clearBtn.addEventListener('click', onClearBtnTapHandler);
searchInput.addEventListener('input', onTextInput);
searchForm.addEventListener('submit', searchYoutubeChannel);




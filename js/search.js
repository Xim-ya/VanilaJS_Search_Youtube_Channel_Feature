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
    channelList.classList.remove('show')
    channelList.innerHTML = ''; // 검색된 채널 list 초기화
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
    // console.log("AIM");
    loadYoutubeChannelList();
    // testLoadYoutubeChannel();


    // insertChannelItem();
    channelList.classList.add('show');


};


const channelNames = ['침책맨', '오킹', '격과사전', '필'];


const insertChannelItem = (channelListData) => {
    channelList.innerHTML = ''; // 검색된 채널 list 초기화
    channelList.classList.toggle(ACTIVE);
    channelListData.map((ele) => {
        channelList.insertAdjacentHTML("beforeend",
            `<li>
            <div class="channel_img"></div>
                <span class="channel_name">${ele['snippet']['title']}</span>
           </li>`
        )
    })
};

// // 필터링된 배열 데이터를 기준으로 `Square` 컴포넌트 생성
// contributionList.map((ele) => {
//     squares.insertAdjacentHTML(
//         "beforeend",
//         `<li data-level="${ele.contributionLevel}"></li>`
//     );

const testLoadYoutubeChannel = () => {
    fetch("mockJson.json")
        .then(response => response.json())
        .then(json => console.log(json));
};


// const kakaoSign
searchIcon.addEventListener('click', onSearchBarTapHandler);
clearBtn.addEventListener('click', onClearBtnTapHandler);
searchInput.addEventListener('input', onTextInput);
searchForm.addEventListener('submit', searchYoutubeChannel);




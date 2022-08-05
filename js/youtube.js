const channelList = document.querySelector('[data-channel = list]');

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&';
const YOUTUBE_KEY =  'AIzaSyCIYVB7l7anQLIxmops2GWA6sQFmG8VxmY';


// Youtube Channel : AIP CALL
export const loadYoutubeChannelList = (url, config) => {
    const axios = window.axios;
    const searchChannelParams = new URLSearchParams({
        key: YOUTUBE_KEY,
        type: 'channel',
        maxResults: '5',
        q: '오킹'
    }).toString();
    const searchYoutubeChannelUrl = YOUTUBE_URL + searchChannelParams;
    axios
        .get(searchYoutubeChannelUrl, {}, {})
        .then(res => {
            insertChannelItem(res.data.items);
        })
        .catch(error => {
            alert("응답값을 찾을 수 없습니다.-> " + searchYoutubeChannelUrl);
        })
};


const insertChannelItem = (channelListData) => {
    channelList.innerHTML = ''; // 검색된 채널 list 초기화
    // channelList.classList.toggle(ACTIVE);
    channelList.classList.add('show');
    channelListData.map((ele) => {
        channelList.insertAdjacentHTML("beforeend",
            `<li>
            <div style="background: url(${ele['snippet']['thumbnails']['medium']['url']})" class="channel_img"></div>
                <span class="channel_name">${ele['snippet']['title']}</span>
           </li>`
        )
    })
};




// // const kakaoSignInUrl = config.api.KAKAOSIGNINURL + signInParams;
// // https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCIYVB7l7anQLIxmops2GWA6sQFmG8VxmY&type=channel&maxResults=10&q=오킹
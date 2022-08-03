import Config from "./config.js";

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
            console.log(res);
            console.log('aim22 '+ searchYoutubeChannelUrl);
        })
        .catch(error => {
            alert("응답값을 찾을 수 없습니다.-> " + searchYoutubeChannelUrl);
        })
};


// // const kakaoSignInUrl = config.api.KAKAOSIGNINURL + signInParams;
// // https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCIYVB7l7anQLIxmops2GWA6sQFmG8VxmY&type=channel&maxResults=10&q=오킹
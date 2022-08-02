import axios from '/node_modules/axios/dist/axios.min.';


 const loadYoutubeChannelList = (url, config) => {
    const searchChannelParams = new URLSearchParams({
        key: 'AIzaSyCIYVB7l7anQLIxmops2GWA6sQFmG8VxmY',
        type: 'channel',
        maxResults: '5',
        q: '오킹'
    }).toString();
    const searchYoutubeChannelUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&' + searchChannelParams;
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

//
//
// // const kakaoSignInUrl = config.api.KAKAOSIGNINURL + signInParams;
// // https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCIYVB7l7anQLIxmops2GWA6sQFmG8VxmY&type=channel&maxResults=10&q=오킹

class Channel {
    constructor(data) {
        this.id = data['id']['channelId'];
        this.name = data['snippet']['title'];
        this.thumbnailUrl = data['snippet']['thumbnails']['medium']['url'];
    }
}



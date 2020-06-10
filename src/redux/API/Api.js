import {ApiKey, URL} from "../types/types";

export default class Api{

    async getDate(){
        const res=await fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&chart=mostPopular&regionCode=US&key=${ApiKey}`)
        return await res.json();
    }
    async getInfoVideo(idVideo){
        const res=await fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idVideo.id.videoId}&key=${ApiKey}`)
        return await res.json();
    }
    async getSearchVideo(query) {
        const res=await fetch(`${URL}/search?part=snippet&maxResults=25&q=${query}&key=${ApiKey}`)
        debugger;
        return await res.json();
    }
    async getCommentsVideo(idChennal) {
        const res=await fetch(`${URL}/commentThreads?part=snippet%2Creplies&videoId=${idChennal}&key=${ApiKey}`)
        return await res.json();
    }
}

import {ApiKey, URL} from "../types/types";
import URlSearchParams from "url-search-params";
export default class Api{
    async getDate() {
        const res = await fetch(
            `${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&` +
            new URlSearchParams({
                maxResults: 10,
                chart: "mostPopular",
                regionCode: "US",
                key: ApiKey,
            })
        );
        return await res.json();
    }
    async getInfoVideo(idVideo) {
        const res = await fetch(
            `${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&` +
            new URlSearchParams({
                id: idVideo,
                key: ApiKey,
            })
        );
        return await res.json();
    }
    async getSearchVideo(query) {
        const res = await fetch(
            `${URL}/search?part=snippet&` +
            new URlSearchParams({
                maxResults: 10,
                q: query,
                type: 'video',
                key: ApiKey,
            })
        );
        return await res.json();
    }
    async getCommentsVideo(idChennal) {
        const res = await fetch(
            `${URL}/commentThreads?part=snippet%2Creplies&` +
            new URlSearchParams({
                videoId: idChennal,
                key: ApiKey,
            })
        );
        return await res.json();
    }
}



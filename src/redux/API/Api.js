import { ApiKey, URL } from "../types/types";
import URlSearchParams from "url-search-params";

export default class Api {
  // async responce(firstParam,part,idVideo,token,query,idChennal){
  //     debugger
  //     const res=await fetch(`${URL}/${firstParam}?part=${part}`+new URlSearchParams({
  //
  //         maxResults:10,
  //         chart:"mostPopular",
  //         pageToken:token,
  //         regionCode:"US",
  //         q:query,
  //         videoId:idChennal,
  //         key:ApiKey
  //     }) )
  //     return  res;
  // }
  //?&maxResults=10&chart=mostPopular&pageToken=${nextToken}&regionCode=US&key=${ApiKey}
  async getData(nextToken) {
    const res = await fetch(
      `${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&` +
        new URlSearchParams({
          maxResults: 10,
          chart: "mostPopular",
          pageToken: nextToken,
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

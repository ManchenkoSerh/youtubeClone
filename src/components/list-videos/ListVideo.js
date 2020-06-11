import React, { useEffect } from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css";
import Spinner from "../spinner/spinner";

const ListVideo = ({
  state = [],
  fetchAllData,
  getObjVideo,
  addVideos,
  token,
                     isLoading,
    isError
}) => {
  async function parseListVideo() {
    await fetchAllData(token);
  }

  useEffect(() => {
    if (token == "") {
      parseListVideo(token);
    } else {
      console.log("parsec");
      window.addEventListener("scroll", () => {
        const scrolltable =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if (Math.ceil(scrolled) === scrolltable) {
          console.log("AAA");
          parseListVideo(token);
        }
      });
    }
  }, [token]);

  // else if(error){
  //   return <p>error!</p>
  // }
  // const list = state.map((item) => {
  //   const { id, ...itemprops } = item;
  //   return (
  //     <li key={id} className="block-container">
  //       <ListVideoItem
  //         id={id}
  //         //obj={() => getObjVideo({ ...item })}
  //         {...itemprops}
  //       />
  //     </li>
  //   );
  // });
  return (
    <div>
      {isLoading?(<Spinner/>):isError?(<p>Error!!</p>):(
          <ul className="block-lists">
        {state.map((item) => {
          const { id, ...itemprops } = item;
          return (
              <li key={id} className="block-container">
                <ListVideoItem
                    id={id}
                    //obj={() => getObjVideo({ ...item })}
                    {...itemprops}
                />
              </li>
          );
        })}
          </ul>)}

    </div>
  );
};
export default ListVideo;

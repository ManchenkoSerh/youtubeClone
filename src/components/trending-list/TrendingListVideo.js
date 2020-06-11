import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { TrendingListItem } from "../trending-list-item/TrendingListItem";
import Spinner from "../spinner/spinner";

export const TrendingListVideo = ({
  state = [],
  getList,
  getObjVideo,
  addVideos,isLoading,isError
}) => {
  const token=""
  async function parseListVideo() {
    await getList();
  }
  async function parseAddVideo() {
    await addVideos();
  }
  useEffect(() => {

    parseListVideo();
  }, [token]);

  // const list = state.map((item) => {
  //   const { id, ...itemprops } = item;
  //   console.log(item);
  //   return (
  //     <TrendingListItem
  //       key={item.id}
  //       id={id}
  //       obj={() => getObjVideo({ ...item })}
  //       {...itemprops}
  //     />
  //   );
  // });

  return <Grid>
    <div>
      {isLoading?(<Spinner/>):isError?(<p>Error!!</p>):(
          <ul>
            {
              state.map((item) => {
                const { id, ...itemprops } = item;
                console.log(item);
                return (
                    <TrendingListItem
                        key={item.id}
                        id={id}
                        //obj={() => getObjVideo({ ...item })}
                        {...itemprops}
                    />
                );
              })
            }
          </ul>)}
    </div>
  </Grid>;
};

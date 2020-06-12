import { connect } from "react-redux";
import {
  addVideos,
  getAllData,
  getObjectVideo,
} from "../../redux/action/action";
import { TrendingListVideo } from "../../components/trending-list/TrendingListVideo";

const mapStateToProps = (state) => ({
  state: state.videos,
  isLoading: state.isLoading,
  isError: state.isError,
});
const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getAllData()),
  //getObjVideo: (obj) => dispatch(getObjectVideo(obj)),
  //addVideos: () => dispatch(addVideos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TrendingListVideo);

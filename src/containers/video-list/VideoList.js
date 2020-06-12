import ListVideo from "../../components/list-videos/ListVideo";
import { connect } from "react-redux";
import {
  getAllData,
  getObjectVideo,
  addVideos,
  fetchVideo,
} from "../../redux/action/action";

const mapStateToProps = (state) => ({
  state: state.videos,
  token: state.token,
  isLoading:state.isLoading,
  isError:state.isError
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllData: (token) => dispatch(getAllData(token)),
  getObjVideo: (obj) => dispatch(getObjectVideo(obj)),
 // addVideos: (token) => dispatch(addVideos(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListVideo);

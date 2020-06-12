import {connect} from "react-redux";
import {
  fetchComments,
  fetchVideo,
} from "../../redux/action/action";
import PlayList from "../../components/Playlist/Playlist";

const mapStateToProps = (state) => ({
  state: state.videos.items,
  comments: state.comments,
  videoInfo: state.videoInfo,
  isLoading:state.isLoading,
  isError:state.isError
});
const mapDispatchToProps = (dispatch) => ({
  getComments: (idv) => dispatch(fetchComments(idv)),
  getVideo: (id) => dispatch(fetchVideo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PlayList);

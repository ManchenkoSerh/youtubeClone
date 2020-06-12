import { connect } from "react-redux";
import {
  fetchVideoSearch,
} from "../../redux/action/action";
import ListVideoSearch from "../../components/list-video-search/ListVideoSearch";

const mapStateToProps = (state) => ({
  state: state.searchVideos,
  searchWord: state.searchWord,
  isLoading:state.isLoading,
  isError:state.isError
});
const mapDispatchToProps = (dispatch) => ({
  getSearchVideo: (query) => dispatch(fetchVideoSearch(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListVideoSearch);

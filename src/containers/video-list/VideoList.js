import ListVideo from "../../components/list-videos/ListVideo";
import { connect } from "react-redux";
import {
  getAllData,
} from "../../redux/action/action";

const mapStateToProps = (state) => ({
  state: state.videos,
  isLoading:state.isLoading,
  isError:state.isError
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllData: (token) => dispatch(getAllData(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListVideo);

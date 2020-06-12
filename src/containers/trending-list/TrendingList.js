import { connect } from "react-redux";
import {
  getAllData,
} from "../../redux/action/action";
import { TrendingListVideo } from "../../components/trending-list/TrendingListVideo";

const mapStateToProps = (state) => ({
  state: state.videos,
  isLoading: state.isLoading,
  isError: state.isError,
});
const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getAllData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TrendingListVideo);

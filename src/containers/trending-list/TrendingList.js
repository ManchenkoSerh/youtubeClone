import {connect} from "react-redux"
import {addVideos, fetchAllData, getAllData, getObjectVideo} from "../../redux/action/action";
import { TrendingListVideo } from "../../components/trending-list/TrendingListVideo";

const mapStateToProps=(state)=>({
    state:state.todos,
    loading:state.loading
})
const mapDispatchToProps=(dispatch)=>({
    fetchAllData:()=>dispatch(fetchAllData()),
    getObjVideo:(obj)=>dispatch(getObjectVideo(obj)),
    addVideos:()=>dispatch(addVideos())
})
export default connect(mapStateToProps,mapDispatchToProps)(TrendingListVideo);

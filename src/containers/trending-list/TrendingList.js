import {connect} from "react-redux"
import {addVideos, getAllData, getObjectVideo} from "../../redux/action/action";
import { TrendingListVideo } from "../../components/trending-list/TrendingListVideo";

const mapStateToProps=(state)=>({
    state:state.todos
})
const mapDispatchToProps=(dispatch)=>({
    getList:()=>dispatch(getAllData()),
    getObjVideo:(obj)=>dispatch(getObjectVideo(obj)),
    addVideos:()=>dispatch(addVideos())
})
export default connect(mapStateToProps,mapDispatchToProps)(TrendingListVideo);

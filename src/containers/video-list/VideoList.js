import ListVideo from "../../components/list-videos/ListVideo";
import {connect} from "react-redux"
import {getAllData, getObjectVideo, addVideos, fetchVideo} from "../../redux/action/action";

const mapStateToProps=(state)=>({
    state:state.todos,
   token:state.token
})
const mapDispatchToProps=(dispatch)=>({
    fetchPosts:()=>dispatch(getAllData()),
    getObjVideo:(obj)=>dispatch(getObjectVideo(obj)),
    addVideos:(token)=>dispatch(addVideos(token))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideo);

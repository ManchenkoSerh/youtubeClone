import ListVideo from "../../components/list-videos/ListVideo";
import {connect} from "react-redux"
import {getAllData, getVide, addVideos, getAllDataSuccess,fetchPosts} from "../../redux/action/action";

const mapStateToProps=(state)=>({
    state:state.todos,
    token:state.token
})
const mapDispatchToProps=(dispatch)=>({
    fetchPosts:()=>dispatch(fetchPosts()),
    getObjVideo:(obj)=>dispatch(getVide(obj)),
    addVideos:(token)=>dispatch(addVideos(token))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideo);

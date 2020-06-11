import ListVideo from "../../components/list-videos/ListVideo";
import {connect} from "react-redux"
import {getAllData, getObjectVideo, addVideos, fetchVideo, fetchAllData} from "../../redux/action/action";

const mapStateToProps=(state)=>({
    state:state.todos,
   token:state.token,
    loading:state.loading,
    error:state.error
})
const mapDispatchToProps=(dispatch)=>({
    fetchAllData:(token)=>dispatch(fetchAllData(token)),
    getObjVideo:(obj)=>dispatch(getObjectVideo(obj)),
    addVideos:(token)=>dispatch(addVideos(token))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideo);
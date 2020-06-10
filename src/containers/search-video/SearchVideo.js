import {connect} from "react-redux"
import {addSearchVideos, getVideoSearch, addVideoIdInfo} from "../../redux/action/action";
import ListVideoSearch from "../../components/list-video-search/ListVideoSearch";

const mapStateToProps=(state)=>({
    state:state.searchVideos,
    searchWord:state.searchWord,
})
const mapDispatchToProps=(dispatch)=>({
    getVideoSearch:(query)=>dispatch(getVideoSearch(query)),
    addSearchVideos:(word)=>dispatch(addSearchVideos(word)),
    addVideoIdInfo:(id)=>dispatch(addVideoIdInfo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideoSearch);

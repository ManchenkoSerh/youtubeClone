import {connect} from "react-redux"
import {getVideo, getVideoSearch} from "../../redux/action/action";
import ListVideoSearch from "../../components/list-video-search/ListVideoSearch";

const mapStateToProps=(state)=>({
    state:state.searchVideos.items,
    searchWord:state.searchWord
})
const mapDispatchToProps=(dispatch)=>({
    getSearchVideo:(query)=>dispatch(getVideoSearch(query)),
    getObjVideo:(obj)=>dispatch(getVideo(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideoSearch);

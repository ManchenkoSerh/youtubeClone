import {connect} from "react-redux"
import {addSearchVideos, addVideos, getVide, getVideoSearch} from "../../redux/action/action";
import ListVideoSearch from "../../components/list-video-search/ListVideoSearch";

const mapStateToProps=(state)=>({
    state:state.searchVideos,
    searchWord:state.searchWord
})
const mapDispatchToProps=(dispatch)=>({
    getSearchVideo:(query)=>dispatch(getVideoSearch(query)),
    getObjVide:(obj)=>dispatch(getVide(obj)),
    addSearchVideos:(word)=>dispatch(addSearchVideos(word))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideoSearch);

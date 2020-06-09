import {connect} from "react-redux"
import {getVide, getVideoSearch} from "../../redux/action/action";
import ListVideoSearch from "../../components/list-video-search/ListVideoSearch";

const mapStateToProps=(state)=>({
    state:state.searchVideos.items,
    searchWord:state.searchWord
})
const mapDispatchToProps=(dispatch)=>({
    getSearchVideo:(query)=>dispatch(getVideoSearch(query)),
    getObjVide:(obj)=>dispatch(getVide(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideoSearch);

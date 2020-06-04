import {connect} from "react-redux"
import {getVideoSearch} from "../../redux/action/action";
import ListVideoSearch from "../../components/list-video-search/ListVideoSearch";

const mapStateToProps=(state)=>({
    state:state.todos.items,
    searchWord:state.searchWord
})
const mapDispatchToProps=(dispatch)=>({
    getSearchVideo:(query)=>dispatch(getVideoSearch(query))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideoSearch);

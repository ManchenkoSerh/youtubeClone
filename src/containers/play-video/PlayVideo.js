import {connect} from "react-redux"
import {getComments, getVideo} from "../../redux/action/action";
import PlayList from "../../components/Playlist/Playlist";

const mapStateToProps=(state)=>({
    stateFull: state,
    state:state.todos.items,
    comments:state.comments.items,
})
const mapDispatchToProps=(dispatch)=>({
    getComments:(idv)=>dispatch(getComments(idv)),
    getVideo:(id)=>dispatch(getVideo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(PlayList);

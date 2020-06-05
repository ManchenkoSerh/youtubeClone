import React from "react";
import {connect} from "react-redux"
import {getComments, getIconChennal, getVideo} from "../../redux/action/action";
import PlayList from "../../components/Playlist/Playlist";

const mapStateToProps=(state)=>({
    state:state.todos.items,
    comments:state.comments.items,
    obj:state.obj,
    obj2:state.obj2
})
const mapDispatchToProps=(dispatch)=>({
    getComments:(idv)=>dispatch(getComments(idv)),
    getVideo:(id)=>dispatch(getVideo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(PlayList);

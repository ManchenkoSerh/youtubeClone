import React from "react";
import {connect} from "react-redux"
import {getComments, getIconChennal} from "../../redux/action/action";
import PlayList from "../../components/Playlist/Playlist";

const mapStateToProps=(state)=>({
    state:state.todos.items,
    comments:state.comments.items,
    obj:state.obj
})
const mapDispatchToProps=(dispatch)=>({
    getComments:(idv)=>dispatch(getComments(idv)),
})
export default connect(mapStateToProps,mapDispatchToProps)(PlayList);

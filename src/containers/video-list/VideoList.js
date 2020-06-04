import ListVideo from "../../components/list-videos/ListVideo";
import {connect} from "react-redux"
import {getAllData, getVideo} from "../../redux/action/action";

const mapStateToProps=(state)=>({
    state:state.todos.items
})
const mapDispatchToProps=(dispatch)=>({
    getList:()=>dispatch(getAllData()),
    getObjVideo:(obj)=>dispatch(getVideo(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListVideo);

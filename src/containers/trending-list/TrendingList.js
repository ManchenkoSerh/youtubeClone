import {connect} from "react-redux"
import {getAllData, getVideo} from "../../redux/action/action";
import { TrendingListVideo } from "../../components/trending-list/TrendingListVideo";

const mapStateToProps=(state)=>({
    state:state.todos.items
})
const mapDispatchToProps=(dispatch)=>({
    getList:()=>dispatch(getAllData()),
    getObjVideo:(obj)=>dispatch(getVideo(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(TrendingListVideo);

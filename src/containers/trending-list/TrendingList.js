import {connect} from "react-redux"
import {getAllData, getVide} from "../../redux/action/action";
import { TrendingListVideo } from "../../components/trending-list/TrendingListVideo";

const mapStateToProps=(state)=>({
    state:state.todos.items
})
const mapDispatchToProps=(dispatch)=>({
    getList:()=>dispatch(getAllData()),
    getObjVide:(obj)=>dispatch(getVide(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(TrendingListVideo);

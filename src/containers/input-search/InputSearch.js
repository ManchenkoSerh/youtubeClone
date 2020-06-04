import React from "react";
import {connect} from "react-redux"
import HeaderYT from "../../components/header/HeaderYT"
import {getVideoSearch} from "../../redux/action/action";

const mapDispatchToProps=(dispatch)=>({
    searchWords:(word)=>dispatch(getVideoSearch(word))
})
export default (mapDispatchToProps)(HeaderYT);

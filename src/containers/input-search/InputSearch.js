import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import { getVideoSearch } from "../../redux/action/action";

const mapDispatchToProps = (dispatch) => ({
  searchWords: (word) => dispatch(getVideoSearch(word)),
});
export default mapDispatchToProps(Header);

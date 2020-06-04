import React, {Component} from "react";
export default class ListVideoSearchItem extends Component{

    render(){
        const {snippet}=this.props;
        //console.log(idChannal)
        /*const Links=()=>{
            localStorage.setItem("videoId",JSON.stringify({
                id:id,
                snippet:snippet,
                statistics:statistics
            }))
        }*/

        return(
            <div className="container-item">
                <img className="container-item__img" src={snippet.thumbnails.default.url} />
                <p>{snippet.title}</p>
            </div>
        )

    }

}

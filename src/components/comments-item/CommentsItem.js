import React, {Component, useEffect} from "react";

const CommentsItem=({snippet})=>{
        console.log(snippet.topLevelComment.snippet)
        return(
            <div>
                <img src={snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                <span>{snippet.topLevelComment.snippet.authorDisplayName}</span>
                <p>{snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
        )
    }

export default CommentsItem;

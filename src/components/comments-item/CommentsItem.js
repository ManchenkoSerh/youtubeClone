import React from "react";

const CommentsItem=({snippet})=>{
        console.log(snippet.topLevelComment.snippet)
        return(
            <div>
                <img src={snippet.topLevelComment.snippet.authorProfileImageUrl} alt='authorProfileImage'/>
                <span>{snippet.topLevelComment.snippet.authorDisplayName}</span>
                <p>{snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
        )
    }

export default CommentsItem;

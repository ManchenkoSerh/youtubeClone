import React from "react";

const CommentsItem=({snippet})=>{
        return (
          <>
            <img
              src={snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="authorProfileImage"
            />
            <span>{snippet.topLevelComment.snippet.authorDisplayName}</span>
            <p>{snippet.topLevelComment.snippet.textOriginal}</p>
          </>
        );
    }

export default CommentsItem;

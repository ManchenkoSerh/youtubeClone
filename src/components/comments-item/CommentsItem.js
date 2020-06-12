import React from "react";
import './CommentsItem.scss'

const CommentsItem=({snippet})=>{
        return (
          <>
            <img
              src={snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="authorProfileImage"
              className='round'
            />
            <div className='commentItem'>
              <b><span>{snippet.topLevelComment.snippet.authorDisplayName}</span></b>
              <p>{snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
          </>
        );
    }

export default CommentsItem;

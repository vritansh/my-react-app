import React from 'react';

const CommentDetail =(props) => {
   
return (
   
    <div className="comment">
        <a href="/" className="avatar">
            <img  src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"alt="avatar" />
        </a>
        <div className="content">
            <a href="/" className="author">
             {props.author}
             </a>
             <div className ="metadata">
                <span className="date" > {props.time} </span>
             </div>
             <div className="text"> Nice blog post </div>
        </div>
    </div>

        );
    }

export default CommentDetail;
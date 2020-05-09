import React from 'react';
import './Post.css';

const Post = (props) => {
  return <div className = "postBlock">
            <div className = "content">Article: {props.article}</div>
            <div className = "content">Author: <b>{props.author}</b></div>
            <button onClick = {props.delete}>Delete</button>
         </div>
}

export default Post;
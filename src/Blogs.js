import React, { Component } from 'react';
import Post from  './Components/Post';
import Feedback from './Components/Feedback';
import './Blogs.css';


class Blogs extends Component{

  state = {
    posts: [
      {
        article: "Two way binding in React",
        author: "Moiz"
      },
      {
        article: "Class based and function based components in react",
        author: "Moiz"
      },
      {
        article: "Angular Toaster Notification Tutorial",
        author: "Rahil"
      }
    ],
    feedback: "Enter your feedback"
  }
    
 onDeletePost = (ind) => {
    let currentPost = [];
    currentPost = this.state.posts.filter((el, index )=> {
      return ind !== index
    })
    this.setState({
      posts: currentPost
    })
 }

 onFeedbackChange = (e) => {
  this.setState({feedback: e.target.value})
 }


  render() {
    const post = this.state.posts.map((el, index) => {
      return <Post article = {el.article} author = {el.author} key = {index} 
               delete = {() => this.onDeletePost(index)}
               />
    })

    
    return <div className = "container">
            <p>Recent Posts on Ciphertrick</p>
            <div>
              {post}
            </div>
            <Feedback value = {this.state.feedback} change = {this.onFeedbackChange}/>
          </div>
  }
}

export default Blogs;
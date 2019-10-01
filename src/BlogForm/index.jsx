import React, { Component } from 'react';
import './BlogForm.css';
import Proptypes from 'prop-types';
class BlogForm extends Component {
   state = {
       title: '',
       content: '',
       user: '',
   };
   handleOnChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       });
   };
   render() {
       return (
           <form className="blog-form">
               <div className="post-title-author">
               {/* <h1>{this.state.title}</h1> */}
               <div>
                   <label>Title</label>
                   <input
                       onChange={this.handleOnChange}
                       value={this.state.title}
                       type="text"
                       name="title"
                   />
               </div>
               <label>Author</label>
               <input
                   onChange={this.handleOnChange}
                   value={this.state.user}
                   type="text"
                   name="user"
               />
               </div>
               <label>New Post</label>
               <textarea
                   className="u-full-width"
                   onChange={this.handleOnChange}
                   value={this.state.content}
                   type="text"
                   name="content"
               />
               <button class="button-primary" onClick={this.props.handleAddPost}>Add</button>
               <button class="button-primary" onClick={this.props.handleToggle}>Close</button>
           </form>
       );
   }
}
export default BlogForm;
BlogForm.propTypes = {
   handleToggle : Proptypes.func,
   handleAddPost : Proptypes.func
}
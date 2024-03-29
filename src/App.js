import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import Footer from './Footer'
import BlogForm from './BlogForm'
import Post from './Post/Post'

class App extends Component {
	state = {
		isShowing: true,
		posts: [
			{
				title: 'My first confetti blog post',
				content: 'I love confetti!!! I PUT IT EVERYWHERE!!!!',
				user: 'Murray918'
			},
			{
				title: 'Pandas are fun!',
				content: 'I dress like one every day!',
				user: 'cwill833'
			}
		]
	}
	handleShowForm = event => {
		this.setState({
			isShowing: !this.state.isShowing
		})
	}

	//update state here and pass this method down to another component
	handleAddPost = ({ title, user, content }) => {
		console.log('app.js line 33', { title, user, content })
		this.setState({
			posts: [{ title, user, content }, ...this.state.posts] // we spread the object and the state
		})
	}

	handleDelete = id => {
		// first we copy the state and modify it
		let newState = this.state.posts.filter(
			item => this.state.posts[id] !== item
		)
		// set the state
		this.setState({
			posts: newState
		})
	}

	render() {
		const composedPosts = this.state.posts.map((item, index) => {
			return (
				<Post
					key={index}
					title={item.title}
					user={item.user}
					content={item.content}
					handleDelete={this.handleDelete}
					id={index}
				/>
			)
		})
		return (
			<div className="App container">
			 <h1>Confetti Blog</h1>
				<Nav content="NAV" />
				{!this.state.isShowing ? (
					<BlogForm
						handleAddPost={this.handleAddPost}
						handleToggle={this.handleShowForm}
					/>
				) : (
					<button onClick={this.handleShowForm}>Add Post</button>
				)}
				<ul>{composedPosts}</ul>
				<Footer />
			</div>
		)
	}
}

export default App

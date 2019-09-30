import React, { Component } from 'react'
import './BlogForm.css'
import PropTypes from 'prop-types'

class BlogForm extends Component {
	state = {
		title: '',
		content: '',
		user: ''
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render() {
		return (
            
			<form className="blog-form">
				<h1>{this.state.title}</h1>
				<div>
				<label>title:  </label>
				<input
					type="text"
					name="title"
					onChange={this.handleOnChange}
					value={this.state.title}
				/>
				</div>
				<div>
					<label>user name:</label>
				<input
					type="text"
					name="user"
					onChange={this.handleOnChange}
					value={this.state.user}
				/>
				</div>
				<div>
					<label>Comtent: </label>
				<input
					type="textarea"
					name="content"
					onChange={this.handleOnChange}
					value={this.state.content}
				/>
				</div>
				<input type="sumbit" value="add" onClick={this.props.handleAddPost}>Add</input>
                <button onClick={this.props.handleToggle} className="button-primary">close</button>
			</form>

		)
	}
}

export default BlogForm

BlogForm.propTypes = {
	handleToggle : PropTypes.func,
	handleAddPost : PropTypes.func
}

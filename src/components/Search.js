import React, { Component } from "react";
import {addUser} from '../reducers/users';
import {connect} from 'react-redux'
class Search extends Component {
	handleSubmit =  (e)=>{
		e.preventDefault()
		const userID = e.target.elements.userID.value
		this.props.addUser(userID)
		e.target.elements.userID.value =''
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="field has-addons has-addons-centered column">
				<div className="control">
					<input className="input" name='userID' type="text" placeholder="Add github profile " />
				</div>
				<div className="control">
					<button className="button is-dark is-outlined">Add</button>
				</div>
			</form>
		);
	}
}

export default connect(state=>state,{addUser})(Search)
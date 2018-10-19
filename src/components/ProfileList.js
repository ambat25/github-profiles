import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
class ProfileList extends Component {
	render() {
		return (
			<div>
				<div className="container has-background-white-bis	">
					<div className="columns is-multiline">
						{this.props.allProfiles.map(prof => (
							<Profile key={prof.id} {...prof} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default connect(state => ({allProfiles:state.users.allProfiles}))(ProfileList);

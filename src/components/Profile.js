import React, { Component } from "react";

export default class Profile extends Component {
	render() {
		return (
			<div className="column is-mobile is-2">
				<div className="card">
					<div className="card-image">
						<figure className="image is-4by3">
							<img
								src={this.props.avatar_url}
								alt=""
							/>
						</figure>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-left">
								<p>{this.props.name}</p>
								<p className="subtitle is-6"><a target="_blank" rel="noopener noreferrer" href={this.props.html_url}>@{this.props.login}</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

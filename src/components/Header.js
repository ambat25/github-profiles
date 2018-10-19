import React, { Component } from "react";
import logo from "../assets/logo.png";

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="github-logo" alt='' />
				Github Profiles
			</header>
		);
	}
}

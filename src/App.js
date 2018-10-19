import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Search from './components/Search'
import Header from './components/Header';
import Message from './components/Message';
import ProfileList from './components/ProfileList';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Message />
				<Search />
        		<ProfileList />
			</div>
		);
	}
}
export default App;

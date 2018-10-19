import React, { Component } from 'react'
import {connect} from 'react-redux'
class Message extends Component {
  render() {
    return (this.props.message ?<div className={`message ${this.props.message.class}` }> {this.props.message.msg} </div> :null)
  }
}

export default connect(state=>({message:state.message}))(Message)
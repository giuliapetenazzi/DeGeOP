/* eslint-disable */


import React, { Component } from 'react'

class MessageWrapper extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lastMsg: props.msg,
		}
	}
	componentDidMount(){
	
	}
	componentWillReceiveProps(props){
		this.setState({
			msgs: this.state.lastMsg,
			// lastMsg : props.msg+'\n\r'+this.state.lastMsg
			lastMsg: props.msg
		})
		// console.log('mw '+new Date())
	}
	render(){
		return <div id="MessageWrapper">. {this.state.lastMsg} </div>
	}
}

export { MessageWrapper };

/* eslint-disable */

import theme from './myTheme.css';
import React, { Component } from 'react'
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';

class ButtonWrapper extends React.Component{
	constructor(props){
		super(props);
		this.addAsset = props.addAsset;
		this.addEdge  = props.addEdge;
		this.addNode  = props.addNode;
		this.state = {
			showAddButton: 'visible'
		}
	}
	componentDidMount(){
		console.log(''+new Date())
	}
	componentWillReceiveProps(props){
		// console.log(props);
		// console.log('bw.hAB: ',props.hideAddButton);
		this.setState({showAddButton: (props.showAddButton)?'visible':'hidden'})
	}

// <IconMenu icon='-' position='bottomRight' onClick={console.log('HEY')} />
	render(){
		return <div id="ButtonWrapper" >
			
			<IconMenu icon='+' position='bottomRight' theme={theme} style={{visibility: this.state.showAddButton}} menuRipple>
				<MenuItem caption='Aggiungi asset' onClick={()=>(this.addAsset())}/>
				<MenuItem caption='Aggiungi nodo' onClick={()=>(this.addNode())}/>
				<MenuItem caption='Aggiungi arco' onClick={()=>(this.addEdge())}/>
			</IconMenu>
			{/*
			 <a href="#" onClick={()=>(this.addAsset())} >Add Asset</a><br/>
			 <a href="#" onClick={()=>(this.addNode())} >Add Node</a><br/>
			 <a href="#" onClick={()=>(this.addEdge())} >Add Edge</a>
			 */}
		</div>
	}
}

export { ButtonWrapper };

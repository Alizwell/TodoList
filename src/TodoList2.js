import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends  Component{
	constructor(){
		super();				
	}
	render(){
		return (
			<div>
				<input  
					value={this.props.inputValue} 
					onChange={this.props.handleInput}
				/>
				<button >提交</button>
				<ul >
					<li>123</li>
				</ul>
			</div>
		)
	}

}

const mapStateToProps = (state)=>{
	return {
		inputValue: state.inputValue
	}
};

const mapDispatchToProps = (dispatch)=>{
	return {
		handleInput(e){
			const action = {
				type:'handle_input_change',
				value: e.target.value
			};
			dispatch(action);
		}
	}
}

export default  connect(mapStateToProps, mapDispatchToProps )(TodoList);


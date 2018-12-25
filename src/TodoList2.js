import React from 'react';
import { connect } from 'react-redux';
import { addItemAction, delItemAction, handleInputChangeAction}  from './store2/actionCreator';


const TodoList = (props)=>{
	const { inputValue, list, handleInput, addItem, delItem } = props;
	return (
		<div>
			<input  
				value={inputValue} 
				onChange={handleInput}
			/>
			<button  onClick={addItem} >提交</button>
			<ul >
				{
					list.map((item, index)=>{
						return <li  onClick={() => delItem(index) }   key={index} >{item}</li>
					})
				}
			</ul>
		</div>
	)
}

const mapStateToProps = (state)=>{
	return {
		inputValue: state.inputValue,
		list: state.list
	}
};

const mapDispatchToProps = (dispatch)=>{
	return {
		handleInput(e){
			const action = handleInputChangeAction(e.target.value);			
			dispatch(action);
		},
		addItem(){
			const action = addItemAction();
			dispatch(action);
		},
		delItem(index){
			const action = delItemAction(index);
			dispatch(action);
		}
	}
}

export default  connect(mapStateToProps, mapDispatchToProps )(TodoList);


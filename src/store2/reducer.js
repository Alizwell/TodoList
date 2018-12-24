const defaultState  = {
	inputValue: '123',
	list:[1,2,3]
}

export default  (state = defaultState, action)=>{
	if( action.type === 'handle_input_change' ){
		const newState = JSON.parse(JSON.stringify( state ));
		newState.inputValue = action.value;
		return newState;
	}
	return  state;
}

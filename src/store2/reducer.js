import { ADD_ITEM, DEL_ITEM, HANDLE_INPUT_CHANGE }  from './actionTypes';

const defaultState  = {
	inputValue: '123',
	list: [1,2,3]
}

export default  (state = defaultState, action)=>{
	if( action.type === HANDLE_INPUT_CHANGE ){
		const newState = JSON.parse(JSON.stringify( state ));
		newState.inputValue = action.value;
		return newState;
	}

	if( action.type === ADD_ITEM ){
		const newState = JSON.parse(JSON.stringify( state ));
		newState.list.push( newState.inputValue );
		newState.inputValue = '';
		return newState;
	}

	if( action.type === DEL_ITEM ){
		const newState = JSON.parse(JSON.stringify( state ));
		newState.list.splice(action.index, 1);
		return newState;
	}
	return  state;
}

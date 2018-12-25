import { ADD_ITEM, DEL_ITEM, HANDLE_INPUT_CHANGE }  from './actionTypes';

export const addItemAction = ()=>({
	type: ADD_ITEM	
})

export const delItemAction = (index)=>({
	type: DEL_ITEM,
	index	
})

export const handleInputChangeAction = (value)=>({
	type: HANDLE_INPUT_CHANGE,
	value	
})



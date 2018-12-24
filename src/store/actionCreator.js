import { INIT_LIST_DATA,  CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DEL_LIST_ITEM }  from './actionTypes';
import axios  from  'axios';

export const getChangeInputAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
});

export const  getAddListItemAction = ()=>({
    type: ADD_LIST_ITEM
})

export const getDelListItemAction = (index)=>({
    type: DEL_LIST_ITEM,
    index
})

export const getInitListAction = (data)=>({
    type: INIT_LIST_DATA,
    data
})

export const getTodoList = ()=>{
	return (dispatch)=>{
		axios.get('./list.json').then((res)=>{
            const  data  = res.data;
            const action = getInitListAction(data);
            dispatch(action);
        }).catch((err)=>{
            console.log(err);
        });
	}
}
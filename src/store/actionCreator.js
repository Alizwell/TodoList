import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DEL_LIST_ITEM }  from './actionTypes';

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
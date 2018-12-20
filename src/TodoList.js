import React, { Component } from 'react';
import store from './store';
import  { getChangeInputAction, getAddListItemAction, getDelListItemAction }  from  './store/actionCreator'

import TodoListUI from  './TodoListUI';
class TodoList extends Component {
    constructor(props) {
        super(props);        
        console.log(store);
        this.state = store.getState();
        this.changeInput = this.changeInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.delItem = this.delItem.bind(this);
        store.subscribe(this.handleInputChange);
    }   
    handleInputChange(){
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action = getAddListItemAction();
        store.dispatch(action);
    }
    delItem(index){        
        const action = getDelListItemAction(index);
        store.dispatch(action);
    }
    changeInput(e){     
        const action = getChangeInputAction(e.target.value);
        store.dispatch(action);
    }
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInput={this.changeInput}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                delItem={this.delItem}
            />            
        );
    }
}

export default TodoList;
import React, { Component } from 'react';
import {Button, Input, List} from 'antd';

import 'antd/dist/antd.css';

import store from './store'

import  { getChangeInputAction, getAddListItemAction, getDelListItemAction }  from  './store/actionCreator'

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
            <div className="todolist"  style={{padding: 30}}>
                <Input
                    style={{ width: 200, marginRight: 20 }}
                    placeholder="input search text"            
                    value={this.state.inputValue}        
                    onChange={this.changeInput}
                />
                <Button  style={{marginLeft:30+'px'}}  type="primary"    onClick={this.handleBtnClick}>提交</Button>
                <br/>
                <br/>
                <List                
                    style={{width: 600}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item  onClick={(e)=>this.delItem(index) }  >{item}</List.Item>)}
                />
            </div>
        );
    }
}

export default TodoList;
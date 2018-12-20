import React, {Component}  from 'react';

import {Button, Input, List} from 'antd';

import 'antd/dist/antd.css';

class TodoListUI extends Component{
    render(){
        return (
            <div className="todolist"  style={{padding: 30}}>
                <Input
                    style={{ width: 200, marginRight: 20 }}
                    placeholder="input search text"            
                    value={this.props.inputValue}        
                    onChange={this.props.changeInput}
                />
                <Button  style={{marginLeft:30+'px'}}  type="primary"    onClick={this.props.handleBtnClick}>提交</Button>
                <br/>
                <br/>
                <List                
                    style={{width: 600}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item  onClick={(e)=>this.props.delItem(index) }  >{item}</List.Item>)}
                />
            </div>
        );
    }
}

export default TodoListUI;
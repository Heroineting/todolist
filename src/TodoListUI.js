import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const TodoListUI=(props)=>{
  return (
    <div>
      <Input
        placeholder='todo info'
        value={props.inputValue}
        onChange={props.handleInputChange}
        onKeyUp={props.handleInputKeyUp}
      />
      <Button type='primary' onClick={props.handleBtnClick}>Add Item</Button>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  );
}

export default TodoListUI;

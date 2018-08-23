import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import { getChangeInputAction, getAddItemAction, getDeleteItemAction, getInitTodoListAction } from "./store/ActionCreator";
import store from './store';
import axios from 'axios';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleStoreChange=this.handleStoreChange.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleInputKeyUp=this.handleInputKeyUp.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleItemDelete=this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount(){
    axios.get('/api/list').then((res)=>{
      const action=getInitTodoListAction(res.data);
      store.dispatch(action);
    })
  }
  render(){
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleInputKeyUp={this.handleInputKeyUp}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleInputChange(e){
    const value=e.target.value;
    const action=getChangeInputAction(value);
    store.dispatch(action);
  }
  handleInputKeyUp(e){
    if(e.keyCode===13){
      const action=getAddItemAction();
      store.dispatch(action);
    }
  }
  handleBtnClick(){
    const action=getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index){
    const action=getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;

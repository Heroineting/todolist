import React,{ Component } from 'react';
import TodoItem from './TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:[]
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleItemDelete=this.handleItemDelete.bind(this);
    this.handleAddItem=this.handleAddItem.bind(this);
  }
  render(){
    return (
      <div>
        <input
          ref={(el)=>{this.input=el;}}
          type='text'
          id='inputValue'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleAddItem}
        />
        <button onClick={this.handleBtnClick}>Add Item</button>
        <ul>
          {this.getItem()}
        </ul>
      </div>
    );
  }
  getItem(){
    return(
      <TransitionGroup className='todo-list'>
        {
          this.state.list.map((item,index)=>(
            <CSSTransition
              key={index}
              timeout={500}
              classNames='fade'
            >
              <TodoItem
                item={item}
                index={index}
                handleItemDelete={this.handleItemDelete}
              />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    )
  }
  handleInputChange(){
    this.setState(()=>({
      inputValue:this.input.value
    }));
  }
  handleBtnClick(){
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }));
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list=prevState.list;
      list.splice(index,1);
      return {list};
    })
  }
  handleAddItem(e){
    if(e.keyCode===13){
      this.handleBtnClick();
    }
  }
}

export default TodoList;

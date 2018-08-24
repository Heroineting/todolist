import React from 'react';
import { connect } from 'react-redux';
import { getChangeInputAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreator";

const TodoList = (props) => {
  return (
    <div>
      <input type="text" value={props.inputValue} onChange={props.handleInputChange}/>
      <button onClick={props.handleAddItem}>Add Item</button>
      <ul>
        {props.list.map((item, index) => (<li key={index} onClick={() => {
          props.handleDeleteItem(index)
        }}>{item}</li>))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list
});
const mapActionToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = getChangeInputAction(e.target.value);
    dispatch(action);
  },
  handleAddItem() {
    const action = getAddItemAction();
    dispatch(action);
  },
  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapActionToProps)(TodoList);

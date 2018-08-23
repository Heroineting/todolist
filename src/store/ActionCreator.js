import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from "./ActionTypes";
import axios from 'axios';

export const getChangeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const getInitTodoListAction = (list) => ({
  type: INIT_TODO_LIST,
  list
});

export const getTodoListDataAction = () => {
  return (dispatch) => {
    axios.get('/api/list').then((res)=>{
      const list=res.data;
      const action=getInitTodoListAction(list);
      dispatch(action);
    });
  };
};

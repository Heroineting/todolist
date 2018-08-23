import { put, takeEvery } from 'redux-saga/effects';
import { getInitTodoListAction } from "./ActionCreator";
import { GET_TODO_DATA } from "./ActionTypes";
import axios from 'axios';

function* getTodoData(){
  try{
    const res=yield axios.get('/api/list');
    const action=getInitTodoListAction(res.data);
    yield put(action);
  }catch(e){
    console.log('/api/list not found!');
  }
}
function* todoSaga(){
  yield takeEvery(GET_TODO_DATA,getTodoData);
}
export default todoSaga;

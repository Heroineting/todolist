import { connect } from 'react-redux';
import { getChangeInputAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreator";
import TodoListUI from './TodoListUI';

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

export default connect(mapStateToProps, mapActionToProps)(TodoListUI);

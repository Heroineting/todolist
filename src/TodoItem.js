import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.deleteItem=this.deleteItem.bind(this);
  }
  render(){
    const { item,className }=this.props;
    return (
      <li onClick={this.deleteItem} className={className}>{item}</li>
    );
  }
  deleteItem(){
    const { handleItemDelete,index }=this.props;
    handleItemDelete(index);
  }
}
TodoItem.defaultProps={
  className:'todo-item'
}
TodoItem.propTypes={
  item:PropTypes.string.isRequired,
  index:PropTypes.number,
  handleItemDelete:PropTypes.func,
  className:PropTypes.string
}
export default TodoItem;

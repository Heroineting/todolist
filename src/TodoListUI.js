import React from 'react';

export default (props) => {
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

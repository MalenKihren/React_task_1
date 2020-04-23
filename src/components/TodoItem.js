import React from 'react';

function TodoItem(props) {


    return (
        <li className="listItem">
            <div className="todoItem">
            <input type="checkbox" checked={props.info.completed} />
            <label>{props.info.text}</label>
            </div>
          
      

        </li>
    );
};

export default TodoItem;
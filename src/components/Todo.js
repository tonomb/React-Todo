import React from 'react';

const Todo = props =>{

    return(
        <div 
            className='todo'
            onClick={()=>props.toggleCompleted(props.item.id)}>
            <p
                className={props.item.completed ?'done' : undefined}
                
            >{props.item.task}
            </p>
        </div>
    )
}

export default Todo;
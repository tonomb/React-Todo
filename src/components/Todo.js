import React from 'react';

const Todo = props =>{

    return(
        <>
            <p
                className={props.item.completed ?'done' : undefined}
                onClick={()=>props.toggleCompleted(props.item.id)}
            >{props.item.task}
            </p>
        </>
    )
}

export default Todo;
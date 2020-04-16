import React from 'react';
import Item from '../item';
import './list.css';

const List = ({items, onDeleted, onDone, onImportant}) => {
    const elements = items.map(elem => {
        return (
            <li className='list-group-item todo-li' key={elem.id}>
                <Item done={elem.done} important={elem.important} label={elem.label} onDeleted={() => onDeleted(elem.id)}
                      onDone={()=> onDone(elem.id)} onImportant={onImportant} id={elem.id}/>
            </li>
        )
    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
};

export default List;
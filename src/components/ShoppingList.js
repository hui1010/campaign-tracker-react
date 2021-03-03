import React, {useState} from 'react';
import ShoppingItem from './ShoppingItem';
import Button from './Button';

const ShoppingList = ({list, onEdit, onDelete, onMatchAll, onMatchItem, onCancelMatch}) => {

    const names = []
    list.map(item => names.push(item.name))
    
    return (
        <div className="shopping-list-list">
            <span>Double click on the item, or </span>
            <Button text="Match all" onClick={() => onMatchAll(names)}/>
            <ul className="shopping-list-items">
                {list.map((item) => (<li key={item.id}><ShoppingItem item={item} onEdit={onEdit} onDelete={onDelete} onMatchItem={onMatchItem} onCancelMatch={onCancelMatch}/></li>))}
            </ul>
        
        </div>
    )
}

export default ShoppingList

import React, {useState}from 'react';
import Button from './Button';

const ShoppingItem = ({item, onEdit, onDelete, onMatchItem, onCancelMatch}) => {
    
    const [doubleClicked, setDoubleClicked] = useState(false)
    const handleDoubleClick = () => {
       if(!doubleClicked) {
        onMatchItem(item.name)
        setDoubleClicked(true)
       }else{
           onCancelMatch()
           setDoubleClicked(false)
       }
    }
    
    return (
        <div onDoubleClick={handleDoubleClick}>
            {item.name}      
            <Button text="Edit" onClick={() => onEdit(item.id)}/>
            <Button text = "Delete" onClick={() => onDelete(item.id)}/>
        </div>
    )
}

export default ShoppingItem

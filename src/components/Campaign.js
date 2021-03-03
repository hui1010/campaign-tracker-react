import React from 'react';
import Button from './Button';
import '../App.css';

const Campaign = ({campaign, matched, onEdit, onDelete}) => {
  
    return (
            
        <tr className={matched.includes(campaign) ? 'highlight' : ''}>
         
            <td>{campaign.name}</td> 
            <td>{campaign.store}</td>
            <td>{campaign.price}</td>
            <td>{campaign.dateBegin}</td>
            <td>{campaign.dateEnd}</td>
            <td><Button text="Edit" onClick={() => onEdit(campaign.id)}/></td>
            <td><Button text = "Delete" onClick={() => onDelete(campaign.id)}/></td>
        </tr>  
    )
}

export default Campaign

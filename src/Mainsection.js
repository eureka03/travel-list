import './Mainsection.css'
import Item from './Item';
import {useState} from 'react';


export default function Mainsection({items,onDeleteItem,onToggleItem,onClearList}){
    const [sortBy,setSortBy] = useState('input');
    let sortedItems;

    if(sortBy === 'input'){
        sortedItems = items;
    }else if(sortBy ==='description'){
        sortedItems = (items.slice()).sort((a,b)=>(a.description).localeCompare(b.description));
    }else if(sortBy ==='packed'){
        
        sortedItems = (items.slice()).sort((a,b)=>Number(a.packed)-Number(b.packed));

    }
    return(
        <div className='mainsection'>
        
                <ul>
                    {(sortedItems).map(item=><Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>)}
                </ul>
            
            <div className='bottomsection'>
                <select value={sortBy} onChange={(e)=>{setSortBy(e.target.value)}}>
                    <option value='input'>SORT BY INPUT ORDER</option>
                    <option value='description'>SORT BY DESCRIPTION</option>
                    <option value='packed'>SORT BY PACKED STATUS</option>
                </select>
                <input type='reset' value='CLEAR LIST' onClick={onClearList}/>
            </div>
        </div>
    );
}
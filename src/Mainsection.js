import './Mainsection.css'
import Item from './Item';


export default function Mainsection({items,onDeleteItem,onToggleItem,onClearList}){
    return(
        <div className='mainsection'>
        
                <ul>
                    {(items).map(item=><Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>)}
                </ul>
            
            <div className='bottomsection'>
                <select>
                    <option>SORT BY INPUT ORDER</option>
                    <option>SORT BY DESCRIPTION</option>
                    <option>SORT BY PACKED STATUS</option>
                </select>
                <input type='reset' value='CLEAR LIST' onClick={onClearList}/>
            </div>
        </div>
    );
}
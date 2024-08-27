import './Mainsection.css'
import Item from './Item';


export default function Mainsection({items,onDeleteItem,onToggleItem}){
    return(
        <div className='mainsection'>
            <ul>
                {(items).map(item=><Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>)}
            </ul>
        </div>
    );
}
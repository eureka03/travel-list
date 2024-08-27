import './Item.css';

export default function Item({item,onDeleteItem,onToggleItem}){
    return(
        <div className='Item'>
            <li>
                <input type='checkbox' value={item.packed} id='checkbox' onChange={()=>onToggleItem(item.id)}/>
                <span style={item.packed===false?{}:{textDecoration:"line-through"}}>
                    {item.quantity}
                    {item.description}  
                </span>
                <button onClick={()=>onDeleteItem(item.id)}>❌</button>
            </li>
        </div>
    );
}
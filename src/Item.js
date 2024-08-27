import './Item.css';

export default function Item({item,onDeleteItem}){
    return(
        <div className='Item'>
            <li>
                <input type='checkbox' value={item.packed} id='checkbox'/>
                <span style={item.packed===true?{textDecoration:"line-through"}:{}}>
                    {item.quantity}
                    {item.description}  
                </span>
                <button onClick={()=>onDeleteItem(item.id)}>❌</button>
            </li>
        </div>
    );
}
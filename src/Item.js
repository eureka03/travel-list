import './Item.css';

export default function Item(props){
    return(
        <div className='Item'>
            <li>
                <input type='checkbox' value={props.packed} id='checkbox'/>
                <span style={props.packed===true?{textDecoration:"line-through"}:{}}>
                    {props.quantity}
                    {props.description}  
                </span>
                <button>❌</button>
            </li>
        </div>
    );
}
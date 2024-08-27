import './Mainsection.css'
import Item from './Item';


export default function Mainsection(props){
    return(
        <div className='mainsection'>
            <ul>
                {(props.items).map(item=><Item quantity={item.quantity} description={item.description} packed={item.packed} key={item.id}/>)}
            </ul>
        </div>
    );
}
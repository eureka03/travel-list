import './footer.css';
export default function Footer({items}){
    const itemCount = items.length;
    const numPacked = items.filter(item=>item.packed).length;
    const percentage = Math.round((numPacked/itemCount)*100);
    return(
        <div className='footer'>
            <em>You have {itemCount} items on your list, and you already packed {numPacked}({percentage}%)</em>
        </div>
    );
}
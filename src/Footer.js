import './footer.css';
export default function Footer({items}){
    if(items.length===0){
        return(
            <div className='footer'>
                <p>Start adding some items to your packing list 🚀</p>
            </div>
        );
    }

    const itemCount = items.length;
    const numPacked = items.filter(item=>item.packed).length;
    const percentage = Math.round((numPacked/itemCount)*100);
    return(
        <div className='footer'>
            <em>{percentage===100?'You got everything!you are ready to go':`You have ${itemCount} items on your list, and you already packed ${numPacked}(${percentage}%)`}</em>
        </div>
    );
}
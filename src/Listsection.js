import './listsection.css';
import {useState} from 'react';

   
export default function Listsection({onAddItems}){

    const[description,setDescription] = useState("");
    const[quantity,setQuantity] = useState(1);
    const[count,setCount] = useState(1);
    

    function handleAdd(){
        const  Item = {description,quantity,packed:false,id:count};
        onAddItems(Item);
        setDescription("");
        setQuantity(1);
        setCount(count+1);
    }
    
    return(
        <div className='listsection'>
            <div className='content'>
                
                    <div className='description'>
                        <h3>
                        What do you need for your trip😘? 
                        </h3>
                    </div>
                    <div className='selection'>
                        <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                
                    <div className='selection-text'>
                        <input type="text" placeholder='Item..' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>

                    </div>
                    <div className='addbutton'>
                        <button onClick={handleAdd}>Add</button>
                    </div>
            </div>
        </div>
    );
}
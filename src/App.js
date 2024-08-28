import Header from './Header';
import Listsection from './Listsection';
import Mainsection from './Mainsection';
import Footer from './Footer'
import {useState} from 'react';

import './App.css';

function App() {
  const[items,setItems] = useState([]);
  

  function handleAddItems(item){
    setItems((items)=>[...items,item]);
  }
  function handleDelete(id){
    setItems(items=>items.filter(item=>item.id!==id));
  }
  function handleToggleItem(id){
    setItems((items)=>items.map(item=> item.id === id?{...item,packed:!item.packed}:item));
  }
  function handleClearList(){
    setItems([]);
  }
 

  return (
    <div className="App">
      <Header/>
      <Listsection onAddItems={handleAddItems}/>
      <Mainsection items={items} onClearList={handleClearList} onDeleteItem={handleDelete} onToggleItem={handleToggleItem}/>
      <Footer items={items}/>
    </div>
  );
}

export default App;

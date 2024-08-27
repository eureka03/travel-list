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

  return (
    <div className="App">
      <Header/>
      <Listsection onAddItems={handleAddItems}/>
      <Mainsection items={items} onDeleteItem={handleDelete}/>
      <Footer/>
    </div>
  );
}

export default App;

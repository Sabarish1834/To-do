import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
      {
        id:1,
        checked : true,
        goal : "Walking" 
      },
      {
        id:2,
        checked : true,
        goal : "Learning React Js"
      },
      {
        id:3,
        checked : false,
        goal : "Bothing"
      },
      {
        id:4,
        checked : true,
        goal : "Sleeping"
      },
    ])
  
    const handleCheck = (id) => {
      const listItems = items.map((item) => (item.id === id ? {...item,checked : !item.checked} : item))
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(setItems))
    }
  
    const handleDelete = (id) => {
      const listItems = items.filter((item) => (item.id !== id))
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(setItems))
    }
  
  return (
    <div className='App'>
      <Header title = "Daily Routine"/>
      <Content
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}


export default App;

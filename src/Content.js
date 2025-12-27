
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items,handleCheck,handleDelete}) => {

  
  return (
    <main>
      {(items.length) ? (
      <ul>
        {items.map((item) =>(
          <li className='item' key={item.id}>
            <input 
            type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked ={item.checked}
            />
            <label style={(item.checked) ? {color:"red"}:null}
            onDoubleClick={() => handleCheck(item.id)}>{item.goal}</label>
           <FaTrashAlt 
           role='button'
           tabIndex="0"
           onClick={() => handleDelete(item.id)}
           />
          </li>
        ))}
      </ul>
      ) : (<h3 style={{backgroundColor:'yellow'}}>Your List is Emptyyy!!</h3>) }
    </main>
    
  )
}

export default Content
import React from "react";
import TooDoItem from "./TooDoItem";
import InputArea from "./InputArea";

function App() {

  
  const [items , setItems] = React.useState([]);

  

  function handleClick(userInput){ 
    setItems(function (prevValue){
      return[
        ...prevValue,
        userInput
      ]
    })

    
  }

  function deleteItem(id){
    setItems(function(prevValue){
      return prevValue.filter(function(item , index){
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={handleClick}
      />
      <div>
        <ul>
          
          {items.map(function(todoItem , index){
            return <TooDoItem 
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem} 
            />
            //return <li>{todoItem}</li> 
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;



//  <div className="form">
//         <input onChange={handleChange} name="userText" type="text" autoComplete="off" value={userInput}/>
//         <button>
//           <span onClick={handleClick}>Add</span>
//         </button>
//  </div>  












//CHALLENGE: Make this app work by applying what you've learnt.

//1. When new text is written into the input, its state should be saved.

//2. When the add button is pressed, the current data in the input should be
//added to an array.

//3. The <ul> should display all the array items as <li>s
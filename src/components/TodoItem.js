import React, {useEffect} from 'react';

export default function TodoItem({item, index, state}){
  const dateComplete = item.dateComplete ? new Date(item.dateComplete): null;

  function updateTodo(what, value) {
    let newArray = [...state.items];
    if(what === "checked"){
      newArray[index].dateComplete = value
      ? new Date().toISOString()
      : null;
    }
    newArray[index][what]= value;
    state.setItems(newArray);
  }
  
  // useEffect((e) => {
    
  
  // }, []);

	return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={(event) => {
            const val = !state.items[index].checked;
            updateTodo("checked", val);
          }}
          checked={item.checked}
        />
        <input 
          type="text" 
          key={index}
          value={item.title} 
          onChange={(e)=> {
            updateTodo("title", e.target.value);
          }}
        />
        
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const newArray = state.items.filter((todo) => todo !== item);
            state.setItems(newArray);
          }}
        >
          X
        </button>
      </div>
      <div>
        {dateComplete &&
          `Date Complete: ${dateComplete.toLocaleDateString()} - 
     					  ${dateComplete.toLocaleTimeString()}`}
      </div>
    </>
  );
}
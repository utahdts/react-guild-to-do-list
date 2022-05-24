import React from 'react';

export default function TodoDetail({item, index, state}) {

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

    return (
        <>
            <div className="todo__detail">
                <textarea 
                    value={item.detail} 
                    onChange={(e)=> {
                        updateTodo("detail", e.target.value);
					}}
				/>
			</div>
        </>
    )
}
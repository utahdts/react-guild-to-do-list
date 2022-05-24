import React, { useRef } from 'react'

export default function AddTodoItem({ state }) {
  const uncontrolled = useRef(); //uncontrolled

  return (
    <>
      
      <input type="text" ref={uncontrolled} />
      <button
        onClick={(event) => {
          state.setItems([
            ...state.items,
            {
              checked: false,
              title: uncontrolled.current.value,
            },
          ]);
          // console.log(`Ref input is ${uncontrolled.current.value}`);
          
          uncontrolled.current.value = "";
        }}
      >
        Add
      </button>
    </>
  );
}
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ state }) {
  // console.log(state.items);
  if (!state.items?.length) {
    return <p>No items to show</p>;
  }

  return (
    <ol>
      {state.items.map((item, index) => {

        return (
          <li key={`${item.uuid}`}>
            {/* <TodoItem item={item} index={index} state={state}/> */}
            {/* <TodoItem item index state/> //Doesn't work */}
            {TodoItem({item, index, state})}
          </li>
        );
      })}
    </ol>
  );
}
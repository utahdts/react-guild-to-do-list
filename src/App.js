import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";
import TodoDetail from "./components/TodoDetail";
import CreateNewAccount from "./components/CreateNewAccount";

import {v4 as uuid} from 'uuid';
import AccountsList from "./components/AccountsList";

function App() {
  const [items, setItems] = useState([
    {
      uuid: uuid(),
      checked: false,
      title: "do this",
      dateComplete: null,
      detail:""
    },
    {
      uuid: uuid(),
      checked: true,
      title: "do another thing",
      dateComplete: '12/12/12 12:12:12',
      detail:""
    },
  ]);
  const [selected, setSelected] = useState(null);
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [list, setList] = useState(null);

  useEffect(()=> {
    // pulls the account info
    // fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts")
    // .then(res => res.json())
    // .then(data => { setAccount(data[0])})

    // fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts")
    //     .then(res => res.json())
    //     .then(newAccounts => { 
    //       console.log(newAccounts);
    //       setAccounts(newAccounts); 
    //     });
        

        

  //   // pulls the todo list
  //   .then(()=> {return fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/0D0SRwdmD6w8A4hPsvHw/todo-lists")})
  //   .then(res => res.json())
  //   .then(data => {setList(data[0])})
  //   // pulls the list of todo items
  //   .then(()=> {return fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/0D0SRwdmD6w8A4hPsvHw/todo-lists/46qvy3lmQsfQDaqQhgWJ/todos")})
  //   .then(res => res.json())
  //   .then(data => {setItems(data)})
    
  },[])
  
  // console.log(list);

  useEffect(() => {
      if(items && items[items.length-1]?.title){
        let tempArray = [...items];
        tempArray.push({
          uuid: uuid(),
          checked: false,
          title: "",
          dateComplete: null,
          detail:""
        });
        setItems(tempArray);
      }
  
  }, [items]);
  
  // console.log("items", items);
  // console.table(items)

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do</h1>
      </header>
      <main>
        <h2>Accounts</h2>
        <CreateNewAccount />
        <AccountsList accounts={accounts} setAccounts={setAccounts} />
        {account?.name}
        <h2>List</h2>
        <div className="todo__wrapper">
          <TodoList state={{ items, setItems, selected, setSelected }} />
          {/* WIP: What do we need to pass in so we can set the state of the todo item's detail */}
          {/* <TodoDetail state={ {item, index, state:{items, setItems, selected}}} /> */}
        </div>
        {/* <AddTodoItem state={{ items, setItems }} /> */}
      </main>
    </div>
  );
}





export default App;

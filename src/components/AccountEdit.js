import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import useGetAccount from "../webservice/account/useGetAccount";
import usePutAccount from "../webservice/account/usePutAccount";
import useGetTodolists from "../webservice/todolists/useGetTodolists";
import usePostTodolists from "../webservice/todolists/usePostTodolists";

const propTypes = {
    id: PropTypes.string.isRequired,
};


export default function AccountEdit({id}){
  const account = useGetAccount(id);
  const todoLists = useGetTodolists(id);
  console.log(todoLists);
  const [accnt, setAccnt] = useState();
  const mutate = usePutAccount();
  const listOfLists = usePostTodolists();

    // function updateAccount() {
    //     mutate(accnt);
    // }

  useEffect(() => {
    setAccnt(account);
  }, [account]);
  console.log(account);
  return(
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={accnt?.name||""} onChange={(e)=>{setAccnt(oldAccount => {
        const newAccount = {...oldAccount};
        newAccount.name = e.target.value;
        return newAccount;
      })}} />
      <label htmlFor="name">Color:</label>
      <input type="text" id="color" value={accnt?.color||""} onChange={(e)=>{setAccnt(oldAccount => {
        const newAccount = {...oldAccount};
        newAccount.color = e.target.value;
        return newAccount;
      })}} />
      {/* todo: post a new list -see next line- */}
      <button onClick={() => { listOfLists(lists) }}>Add New List</button>
      <button type="submit" onClick={()=>{mutate(accnt)}}>Save</button>
    </div>
  )
}

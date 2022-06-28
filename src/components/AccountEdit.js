import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import useGetAccount from "../webservice/useGetAccount";
import usePutAccount from "../webservice/usePutAccount";

const propTypes = {
    id: PropTypes.string.isRequired,
};


export default function AccountEdit({id}){
  let account = useGetAccount(id);
  const [accnt, setAccnt] = useState();
  const mutate = usePutAccount();
    
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
      <button type="submit" onClick={()=>{mutate(accnt)}}>Save</button>
    </div>
  )
}
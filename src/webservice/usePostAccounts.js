import { useEffect, useState } from "react";

export default () => {
  const [newAccount, setNewAccount] = useState([]);

  useEffect(
    (newAccountData) => {
      // fetch(url, {method: 'POST', body: JSON.stringify(data)})
      // // pulls the account info
      // fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts")
      //   .then(res => res.json())
      //   .then(newAccounts => { setAccounts(newAccounts); });
      fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts", {method: 'POST', body: JSON.stringify(data)})
        .then(res => res.json())
        .then(account => { 
          setNewAccount(account);
          console.log(newAccount); 
        });
    },
    []
  );

  return newAccount;
};

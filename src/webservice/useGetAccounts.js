import { useEffect, useState } from "react";

export default () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(
    () => {
      // pulls the account info
      fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts")
        .then(res => res.json())
        .then(newAccounts => { setAccounts(newAccounts); });
    },
    []
  );

  return accounts;
};
import { useEffect, useState } from "react";
import {useQuery} from "react-query";

export default () => {
  let {data} = useQuery("accountsGet", ()=>{
    return fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts")
        .then(res => res.json())
  });

  return data;
};
import { useEffect, useState } from "react";
import {useQuery} from "react-query";

export default (accountId) => {
  let {data} = useQuery("toDoListsGet", ()=>{
    return fetch(`https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${accountId}/todo-lists`)
        .then(res => res.json())
  });

  return data;
};

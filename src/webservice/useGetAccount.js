import { useEffect, useState } from "react";
import {useQuery} from "react-query";

export default (id) => {
  let {data} = useQuery(["accountGet", id], ()=>{
    return fetch(`https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${id}`)
        .then(res => res.json())
  });

  return data;
};
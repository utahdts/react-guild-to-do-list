import { useQuery } from "react-query";

export default () => {
  const query = useQuery('accounts-GET', () => {
    return fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts")
      .then(res => res.json());
  });

  return query.data;
};

import { useQuery } from "react-query";

export default (queryTag, url) => {
  let { data } = useQuery(queryTag, () => {
    return fetch(url)
      .then(res => res.json())
      .catch(error => console.error(error))
  });

  return data;
};

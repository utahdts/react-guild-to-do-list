import { useMutation, useQueryClient } from "react-query";

export default () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (id) => {
      return fetch(
        `https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${id}`,
        {
          method: "DELETE",
        }
      )
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("accountsGet");
      },
    }
  );

  return mutate;
};

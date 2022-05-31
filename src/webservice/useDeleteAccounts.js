import { useMutation, useQueryClient } from "react-query";

export default () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (accountId) => {
      return fetch(`https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${accountId}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('accounts-GET');
      }
    }
  );

  return mutation.mutateAsync;
};

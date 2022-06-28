import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export default () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (data) => {
      return fetch(
        `https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${data.id}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("accountsGet");
      },
    }
  );

  return mutate;
};

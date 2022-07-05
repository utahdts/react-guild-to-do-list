import useGetBase from "../useGetBase";

export default (id) => {
  return useGetBase(
    ["accountGet", id],
    `https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${id}`
  );
};

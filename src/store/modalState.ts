import { atom } from "recoil";

type stateType = { open: boolean; num: any };

export const ModalState = atom({
  key: "modalState",
  default: <stateType>{
    open: false,
    num: "",
  },
});

import { atom } from "recoil";

type stateTpye = { open: boolean; num: any };

export const ModalState = atom({
  key: "modalState",
  default: <stateTpye>{
    open: false,
    num: "",
  },
});

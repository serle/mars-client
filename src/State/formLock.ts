import { atom } from "recoil";

export enum FormState {
    CLEAN,
    DIRTY,
    DONE
}


const formLock = atom({
    key: 'formLock',
    default: FormState.CLEAN
});

export default formLock;
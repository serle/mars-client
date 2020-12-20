import { atom } from "recoil";

export enum FormState {
    CLEAN,
    DIRTY,
    DONE
}


const formLock = atom({
    key: 'formLock',
    default: FormState.DIRTY
});

export default formLock;
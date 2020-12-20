import { atom } from "recoil";

const instructionSetState = atom({
    key: 'instructionSet',
    default: new Set(["R", "F", "L"])
});

export default instructionSetState;
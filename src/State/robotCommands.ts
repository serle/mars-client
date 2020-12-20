import { atom } from "recoil";

//add in a null value
export enum Orientation {
    N="N", E="E", W="W", S="S"
}

export type InitialState = {
    x: number;
    y: number;
    o: Orientation | null;
}

export type RobotCommand = {
    //add a unique id so we can use it as a react key for list processing
    id: number;
    initialState: InitialState;
    instructions: string;
}

const robotCommandState = atom<RobotCommand[]>({
    key: 'robotCommands',
    default: [],
});

export default robotCommandState
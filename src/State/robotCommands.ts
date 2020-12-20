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
    default: [
        {
            id: 1,
            initialState: { x: 1, y: 1, o: Orientation.E },
            instructions: "RFRFRFRF"
        },
        {
            id: 2,
            initialState: { x: 3, y: 2, o: Orientation.N },
            instructions: "FRRFLLFFRRFLL"
        },
        {
            id: 3,
            initialState: { x: 0, y: 3, o: Orientation.W },
            instructions: "LLFFFLFLFL"
        }
    ],
});

export default robotCommandState
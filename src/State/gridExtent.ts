import { atom } from "recoil";

export type Extent = {
    x: number;
    y: number;
}

const gridExtentState = atom({
    key: 'gridExtent',
    default: {
        x: 5,
        y: 3
    }
});

export default gridExtentState;
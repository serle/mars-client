import { atom } from "recoil";

export type Extent = {
    x: number;
    y: number;
}

const gridExtentState = atom({
    key: 'gridExtent',
    default: {
        x: 0,
        y: 0
    }
});

export default gridExtentState;
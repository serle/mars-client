import React from "react";
import {FormState} from "../../State/formLock";
import {Extent} from "../../State/gridExtent";

const MIN_EXTENT = 1
const MAX_EXTENT = 50

//edit line needs this, so that it can be disabled, untill the grid extent is valid
export function isExtentValid(gridExtent: Extent) {
    return  (gridExtent.x >= MIN_EXTENT && gridExtent.x <= MAX_EXTENT) &&
            (gridExtent.y >= MIN_EXTENT && gridExtent.y <= MAX_EXTENT)
}

export function extentValidator(gridExtent: Extent, setError:React.Dispatch<React.SetStateAction<string|null>>) {
    if (gridExtent.x === -1 && gridExtent.y === -1) {
        //dont show and error for a blank line
        setError(null)
    }
    else if (gridExtent.x < MIN_EXTENT || gridExtent.x > MAX_EXTENT) {
        setError(`X must be in range: [${MIN_EXTENT}:${MAX_EXTENT}]`)
    }
    else if (gridExtent.y < MIN_EXTENT || gridExtent.y > MAX_EXTENT) {
        setError(`Y must be in range: [${MIN_EXTENT}:${MAX_EXTENT}]`)
    }
    else {
        //the line is valid now
        setError(null)
    }
}


export function displayValue(value:number) : number | "" {
    return value !== 0 ? value : ""
}


export function checkExtentKey(event:React.KeyboardEvent<HTMLInputElement>) {
    const NUMBERS = /[0-9/]+/

    if (!NUMBERS.test(event.key)) {
        event.preventDefault()
    }
}


export function handleExtentChangeX(event:React.ChangeEvent<HTMLInputElement>,
                                    setGridExtent:React.Dispatch<React.SetStateAction<Extent>>,
                                    setError:React.Dispatch<React.SetStateAction<string|null>>,
                                    setFormLock:React.Dispatch<React.SetStateAction<FormState>>,
                                    y:number ) {
    const targetValue = event.target.value

    try {
        if (targetValue === "") {
            setGridExtent({x: 0, y: y})
            setFormLock(FormState.DIRTY)
            return true
        }

        const x = parseInt(targetValue)
        if (x < 1 || x > MAX_EXTENT) {
            setError(`X must in range [1;${MAX_EXTENT}]`)
        }
        else {
            setFormLock(FormState.DIRTY)
            setGridExtent({x: x, y: y})
        }
        return
    }
    catch (Exception) {
        setError("X must be an Integer")
        return
    }
}

export function handleExtentChangeY(event:React.ChangeEvent<HTMLInputElement>,
                                    setGridExtent:React.Dispatch<React.SetStateAction<Extent>>,
                                    setError:React.Dispatch<React.SetStateAction<string|null>>,
                                    setFormLock:React.Dispatch<React.SetStateAction<FormState>>,
                                    x:number ) {
    const targetValue = event.target.value

    try {
        if (targetValue === "") {
            setGridExtent({x: x, y: 0})
            setFormLock(FormState.DIRTY)
            return true
        }

        const y = parseInt(targetValue)
        if (y < 1 || y > MAX_EXTENT) {
            setError(`Y must in range [1;${MAX_EXTENT}]`)
        }
        else {
            setFormLock(FormState.DIRTY)
            setGridExtent({x: x, y: y})
        }
        return
    }
    catch (Exception) {
        setError("Y must be an Integer")
        return
    }
}
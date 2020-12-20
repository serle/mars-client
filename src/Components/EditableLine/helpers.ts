import React from "react";
import {FormState} from "../../State/formLock";
import {Orientation} from "../../State/robotCommands";
import {Extent} from "../../State/gridExtent";

const MAX_INSTRUCTION_LENGTH = 100;

export function isBlankLine(x:number,
                          y:number,
                          orientation:Orientation|null,
                          instructions:string|null) {
    return (x === -1 && y === -1 && orientation == null && instructions == null)
}

export function lineValidator(x:number,
                              y:number,
                              orientation:Orientation|null,
                              instructions:string|null,
                              gridExtent:Extent,
                              instructionSet:Set<string>,
                              setError:React.Dispatch<React.SetStateAction<string|null>>) {
    if (isBlankLine(x, y, orientation, instructions)) {
        //dont show and error for a blank line
        setError("")
    }
    else if (x < 0 || x > gridExtent.x) {
        setError(`X must be in range: [0:${gridExtent.x}]`)
    }
    else if (y < 0 || y > gridExtent.y) {
        setError(`Y must be in range: [0:${gridExtent.y}]`)
    }
    else if (orientation == null || !([Orientation.N, Orientation.E, Orientation.W, Orientation.S].includes(orientation))) {
        setError(`Orientation must one of [N, S, E, W]`)
    }
    else if (instructions == null) {
        setError(`Instructions must one of ${instructionSetToString(instructionSet)}`)
    }
    else if (instructions.length > MAX_INSTRUCTION_LENGTH) {
        setError(`Instructions length must be in the range [1: ${MAX_INSTRUCTION_LENGTH}]`)
    }
    else {
        //the line is valid now
        setError(null)
    }
}


export function instructionSetToString(instructionSet:Set<string>):string {
    if (instructionSet.size === 0) return "[]"

    let result = "["

    instructionSet.forEach(instruction => result += instruction + ", ")

    result = result.substr(0, result.length - 2)
    result += "]"

    return result;
}

export function numericValue(value:number, nullValue:number) : number | "" {
    return value !== nullValue ? value : ""
}

export function orientationValue(value:Orientation|null) : Orientation | "" {
    return value !== null ? value : ""
}

export function stringValue(value:string|null) : string {
    return value !== null ? value : ""
}



export function checkIntegerKey(event:React.KeyboardEvent<HTMLInputElement>) {
    const NUMBERS = /[0-9/]+/

    if (!NUMBERS.test(event.key)) {
        event.preventDefault()
    }
}

export function handleIntegerChange(event:React.ChangeEvent<HTMLInputElement>,
                                    setState:React.Dispatch<React.SetStateAction<number>>,
                                    setError:React.Dispatch<React.SetStateAction<string|null>>,
                                    setFormLock:React.Dispatch<React.SetStateAction<FormState>>,
                                    nullValue: number,
                                    minValue:number,
                                    maxValue:number) {

    const targetName = event.target.getAttribute('name')
    const targetValue = event.target.value

    try {
        if (targetValue === "") {
            setState(nullValue)
            setFormLock(FormState.DIRTY)
            return
        }

        const value = parseInt(targetValue)
        if (value < minValue || value > maxValue) {
            setError(`${targetName} must in range [${minValue};${maxValue}]`)
        }
        else {
            setFormLock(FormState.DIRTY)
            setState(value)
        }
    }
    catch (Exception) {
        setError(`${targetName} must be an Integer`)
    }
}


export function checkOrientationKey(event:React.KeyboardEvent<HTMLInputElement>) {
    const ORIENTATIONS = /[NSEWnsew/]+/

    if (!ORIENTATIONS.test(event.key)) {
        event.preventDefault()
    }
}

export function handleOrientationChange(event:React.ChangeEvent<HTMLInputElement>,
                                        setState:React.Dispatch<React.SetStateAction<Orientation|null>>,
                                        setError:React.Dispatch<React.SetStateAction<string|null>>,
                                        setFormLock:React.Dispatch<React.SetStateAction<FormState>>) {

    const targetName = event.target.getAttribute('name')
    const targetValue = event.target.value.toUpperCase()

    if (targetValue === "") {
        setState(null)
        setFormLock(FormState.DIRTY)
        return
    }

    if (!["N", "E", "S", "W"].includes(targetValue)) {
        setState(null)
        setError(`${targetName} must be one of [N, E, S, W]`)
    }

    //@ts-ignore
    setState(targetValue)
}


export function checkInstructionKey(event:React.KeyboardEvent<HTMLInputElement>, instructionSet:Set<String>) {
    if (instructionSet == null || instructionSet.size === 0) return false

    if (!instructionSet.has(event.key.toUpperCase())) {
        event.preventDefault()
    }
}

export function handleInstructionChange(event:React.ChangeEvent<HTMLInputElement>,
                                        setState:React.Dispatch<React.SetStateAction<string|null>>,
                                        setError:React.Dispatch<React.SetStateAction<string|null>>,
                                        setFormLock:React.Dispatch<React.SetStateAction<FormState>>) {

    const targetValue = event.target.value.toUpperCase()

    if (targetValue === "") {
        setState(null)
        setFormLock(FormState.DIRTY)
        setError(`Instruction length must be in range [1;${MAX_INSTRUCTION_LENGTH}]}`)
        return
    }

    if (targetValue.length > MAX_INSTRUCTION_LENGTH) {
        setState(targetValue)
        setFormLock(FormState.DIRTY)
        setError(`Instruction length must be in range [1;${MAX_INSTRUCTION_LENGTH}]}`)
        return
    }

    //might want to check this again if someone removes the keypress event guard

    //@ts-ignore
    setState(targetValue)
    setFormLock(FormState.DIRTY)
    setError(null)
}

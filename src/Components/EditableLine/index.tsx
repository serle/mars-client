import React, {FC, useEffect, useState} from "react";
import './EditableLine.css';
import {useRecoilValue, useSetRecoilState} from "recoil";
import robotCommandState, {Orientation, RobotCommand} from "../../State/robotCommands";
import formLockState, {FormState} from "../../State/formLock";
import gridExtentState, {Extent} from "../../State/gridExtent";
import instructionSetState from "../../State/instructionSet";
import {
    isBlankLine,
    lineValidator,
    checkInstructionKey,
    checkIntegerKey,
    checkOrientationKey,
    handleIntegerChange,
    handleOrientationChange,
    handleInstructionChange,
    numericValue,
    orientationValue,
    stringValue
} from "./helpers";
import InputError from "../InputError";
import {isExtentValid} from "../GridExtent/helpers";


const EditableLine:FC = () => {
    const [ x, setX ] = useState(-1);
    const [ y, setY ] = useState(-1);
    const [ orientation, setOrientation ] = useState<Orientation | null>(null);
    const [ instructions, setInstructions ] = useState<string | null>(null);
    const [ error, setError ] = useState<string|null>("");

    const gridExtent = useRecoilValue(gridExtentState);
    const instructionSet = useRecoilValue(instructionSetState);
    const setFormLock = useSetRecoilState(formLockState);
    const setRobotCommands = useSetRecoilState(robotCommandState);

    useEffect(() => {
        if (!isExtentValid(gridExtent)) {
            //if the grid extent becomes invalid, clear the edit line
            setX(-1)
            setY(-1)
            setOrientation(null)
            setInstructions(null)
            setError(null)
        }
    }, [gridExtent])

    //maintains next error state, acts as a hint on the input
    useEffect(() => lineValidator(x, y, orientation, instructions, gridExtent, instructionSet, setError),
            [x, y, orientation, instructions, instructionSet, gridExtent])


    function addCommand(x:number, y:number, orientation:Orientation|null, instructions:string|null) {
        //can't happen anyway, as isError disables button
        if (x === -1 || y === -1 || orientation == null || instructions == null) return

        const additionalCommand:RobotCommand = {
            id: Date.now(),
            initialState: {
                x: x,
                y: y,
                o: orientation
            },
            instructions: instructions
        }
        setFormLock(FormState.DIRTY)
        setRobotCommands((currState) => [ ...currState, additionalCommand ])

        //clears out the edit line, for the next time
        setX(-1)
        setY(-1)
        setOrientation(null)
        setInstructions(null)
        setError(null)
    }

    const disabled = !isExtentValid(gridExtent)
    const blankLine = isBlankLine(x, y, orientation, instructions)

    return (
        <div className="edit-line">
            <input type="text"
                   name="x"
                   autoComplete="x"
                   disabled={disabled}
                   value={numericValue(x, -1)}
                   onKeyPress={(event) => checkIntegerKey(event)}
                   onChange={(event) => handleIntegerChange(event, setX, setError, setFormLock, -1, 0, gridExtent.x)}
                   className="edit-line__state"/>
            <input type="text"
                   name="y"
                   autoComplete="y"
                   disabled={disabled}
                   value={numericValue(y, -1)}
                   onKeyPress={(event) => checkIntegerKey(event)}
                   onChange={(event) => handleIntegerChange(event, setY, setError, setFormLock, -1, 0, gridExtent.y)}
                   className="edit-line__state"
            />
            <input type="text"
                   name="orientation"
                   autoComplete="o"
                   disabled={disabled}
                   value={orientationValue(orientation)}
                   onKeyPress={(event) => checkOrientationKey(event)}
                   onChange={(event) => handleOrientationChange(event, setOrientation, setError, setFormLock)}
                   className="edit-line__state"
            />
            <input type="text"
                   name="instructions"
                   autoComplete="i"
                   disabled={disabled}
                   value={stringValue(instructions)}
                   onKeyPress={(event) => checkInstructionKey(event, instructionSet)}
                   onChange={(event) => handleInstructionChange(event, setInstructions, setError, setFormLock)}
                   className="edit-line__instruction"/>
            <button className="edit-line__btn"
                    disabled={!!error || blankLine}
                    onClick={() => addCommand(x, y, orientation, instructions)}>
                Add
            </button>
            <InputError error={error} extent={false}/>
        </div>
    )
}

export default EditableLine
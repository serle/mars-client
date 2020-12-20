import React, {FC} from "react";
import './NonEditableLine.css';

import robotCommandState, {RobotCommand} from "../../State/robotCommands"
import {useSetRecoilState} from "recoil";
import formLockState, {FormState} from "../../State/formLock";

const NonEditableLine:FC<RobotCommand> = ({ id, initialState, instructions}) => {
    const setFormLock = useSetRecoilState(formLockState);
    const setRobotCommands = useSetRecoilState(robotCommandState);

    const removeCommand = () => {
        setFormLock(FormState.DIRTY)
        setRobotCommands((currState) => currState.filter(v => v.id !== id))
    }

    return (
        <React.Fragment>
            <div className="non-edit-line__state">{initialState.x}</div>
            <div className="non-edit-line__state">{initialState.y}</div>
            <div className="non-edit-line__state">{initialState.o}</div>
            <div className="non-edit-line__instructions">{instructions}</div>
            <button className="non-edit-line__btn" onClick={() => removeCommand()}>Rem</button>
        </React.Fragment>
    )
}

export default NonEditableLine
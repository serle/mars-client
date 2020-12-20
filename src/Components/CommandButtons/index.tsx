import React from 'react';
import './CommandButtons.css';
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import gridExtentState from "../../State/gridExtent";
import robotCommandsState from "../../State/robotCommands";
import formLockState, {FormState} from "../../State/formLock";

const CommandButtons = () => {
    const setFormLock = useSetRecoilState(formLockState)
    const robotCommands = useRecoilValue(robotCommandsState);
    const resetGridExtent = useResetRecoilState(gridExtentState);
    const resetRobotCommands = useResetRecoilState(robotCommandsState);

    const clear = () => {
        resetGridExtent();
        resetRobotCommands();
        setFormLock(FormState.CLEAN)
    }

    const send = async () => {
        setFormLock(FormState.DONE)
    }

    //both buttons are disabled if there are no commands to send
    //note, if there are commands, they are valid
    const disabled = robotCommands.length === 0

    return (
        <div className="command-buttons">
            <button disabled={disabled}
                    className="command-buttons__clear"
                    onClick={ () => clear() }>
                Clear
            </button>
            <button disabled={disabled}
                    className="command-buttons__submit"
                    onClick={ () => send() }>
                Submit
            </button>
        </div>
    )
}

export default CommandButtons;
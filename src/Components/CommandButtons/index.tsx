import React from 'react';
import './CommandButtons.css';

import axios from 'axios';
import {useRecoilValue, useResetRecoilState} from "recoil";
import gridExtentState from "../../State/gridExtent";
import robotCommandsState from "../../State/robotCommands";


const command = "5 3|1 1 E|RFRFRFRF||3 2 N|FRRFLLFFRRFLL||0 3 W|LLFFFLFLFL"

const CommandButtons = () => {
    const gridExtent = useRecoilValue(gridExtentState);
    const robotCommands = useRecoilValue(robotCommandsState);
    const resetGridExtent = useResetRecoilState(gridExtentState);
    const resetRobotCommands = useResetRecoilState(robotCommandsState);

    const clear = () => {
        resetGridExtent();
        resetRobotCommands();
    }

    const send = async () => {
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
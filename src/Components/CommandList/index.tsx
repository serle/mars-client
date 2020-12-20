import React, {useEffect} from "react";
import './CommandList.css'

import NonEditableLine from "../NonEditableLine";
import CommandHeaderLine from "../CommandHeaderLine";

import {useRecoilState, useRecoilValue} from "recoil";
import robotCommandState from "../../State/robotCommands";
import gridExtentState from "../../State/gridExtent";



const CommandList = () => {
    const gridExtent = useRecoilValue(gridExtentState);
    const [ robotCommands, setRobotCommands ] = useRecoilState(robotCommandState);

    //if the gridExtent is changed, clear the robot command list
    //todo - need to check that setRobotCommands in a memorized value
    //todo - should probably do a confirm popup as its a big change
    useEffect(() => setRobotCommands([]), [gridExtent, setRobotCommands])

    return (
        <div className="command-list">
            <CommandHeaderLine/>
            { robotCommands.map( v => <NonEditableLine key={v.id} {...v}/>) }
       </div>
    )
}

export default CommandList
import {selector} from "recoil";

import axios, {AxiosResponse} from "axios";
import robotCommandState, {RobotCommand} from "./robotCommands";
import gridExtentState, {Extent} from "./gridExtent";
import formLockState, {FormState} from "./formLock";

export type RobotReport = {
    data: string[]
    error: string | null
}

function responseToJson(response:AxiosResponse):RobotReport {
    if (response.status === 200) {
        return {
            data: response.data,
            error: null
        }
    }
    else {
        return {
            data: [],
            error: response.data
        }
    }
}

//converts the robot command json array into the command string used in the api call
function requestToString(gridExtent: Extent, robotCommands: RobotCommand[]): string {
    //start with the grid extent
    let result = gridExtent.x + " " + gridExtent.y + "|"

    for (let i = 0; i < robotCommands.length; i++) {
        const { initialState, instructions } = robotCommands[i]

        //add in the initial state
        result += initialState.x + " " + initialState.y + " " + initialState.o + "|"

        //add in the instructions
        result += instructions + "|"

        //add in the extra pipe if there are more commands coming
        result += i < robotCommands.length - 1 ? "|" : ""
    }

    return result;
}


const robotReportQuery = selector({
    key: 'robotReport',
    get: async ({get}) => {
        //this ensures that report is blank if any edits are made to the form
        //as the robot report is effectively invalidate given the mutated input
        //once the submit button is clicked, the FormState is set to DONE and we
        //execute the new api request
        if (get(formLockState) !== FormState.DONE) return { data: [], error: null };

        //retrieve the state dependencies
        const gridExtent = get(gridExtentState)
        const robotCommands = get(robotCommandState)

        //make the api request
        const response = await axios.post(`http://localhost:8080/mars?command=${requestToString(gridExtent, robotCommands)}`);

        //translate the api response to a nice useable json format
        return responseToJson(response)
    },
});

export default robotReportQuery;
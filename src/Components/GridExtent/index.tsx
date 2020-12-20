import React, {useEffect, useState} from 'react';
import './GridExtent.css';

import {useRecoilState, useSetRecoilState} from "recoil";
import gridExtentState from "../../State/gridExtent";
import formLockState from "../../State/formLock";
import {handleExtentChangeX, handleExtentChangeY, displayValue, checkExtentKey, extentValidator} from "./helpers";
import InputError from "../InputError";


const GridExtent = () => {
    const [error, setError] = useState<string|null>(null)

    const setFormLock = useSetRecoilState(formLockState);
    const [gridExtent, setGridExtent] = useRecoilState(gridExtentState);

    //maintains next error state, acts as a hint on the input
    useEffect(() => extentValidator(gridExtent, setError), [gridExtent])

    return (
        <div className="grid-extent">
            <div className="grid-extent__content">
                <div className="grid-extent__label">Surface Grid</div>
                <input type="text"
                       name="max-x"
                       autoComplete="off"
                       value={displayValue(gridExtent.x)}
                       onKeyPress={(event) => checkExtentKey(event)}
                       onChange={(event) => handleExtentChangeX(event, setGridExtent, setError, setFormLock, gridExtent.y) }
                       className="grid-extent__input"
                />
                <div className="grid-extent__cross">by</div>
                <input type="text"
                       name="max-y"
                       autoComplete=""
                       value={displayValue(gridExtent.y)}
                       onKeyPress={(event) => checkExtentKey(event)}
                       onChange={(event) => handleExtentChangeY(event, setGridExtent, setError, setFormLock, gridExtent.x) }
                       className="grid-extent__input"
                />
            </div>
            <InputError error={error} extent={true}/>
        </div>
    )
}

export default GridExtent;

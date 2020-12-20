import React, {FC} from "react";
import './CommandHeaderLine.css';

type Props = {}

const CommandHeaderLine:FC<Props> = () => {
    return (
        <React.Fragment>
            <div className="command-header__state">Initial State</div>
            <div className="command-header__instructions">Instructions</div>
            <div/>
        </React.Fragment>
    )
}

export default CommandHeaderLine
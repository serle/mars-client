import React from 'react';
import './CommandForm.css';
import GridExtent from "../GridExtent";
import CommandList from "../CommandList";
import ResultReport from "../ResultReport";
import CommandButtons from "../CommandButtons";
import EditableLine from "../EditableLine";

const CommandForm = () => {
    return (
        <div className="command-form">
            <GridExtent/>
            <CommandList/>
            <EditableLine/>
            <CommandButtons/>
            <ResultReport/>
        </div>
    );
}

export default CommandForm;

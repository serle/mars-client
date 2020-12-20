import React from 'react';
import './ResultReport.css';

import { useRecoilValue } from "recoil";

import robotReportQuery, {RobotReport} from "../../State/robotReport";

//renders the reportState
function render(reportState:RobotReport) {
    if (reportState.error || !reportState.data) return <div className="result-report__error">{reportState.error?.endsWith("404") ? "Solar storm, connection is spotty.." : reportState.error}</div>
    if (reportState.data && reportState.data.length === 0) return <div className="result-report__empty">Awaiting instructions...</div>

    //note we can get away with using the index as a key as if anything changes the report gets destroyed and
    //we display to the waiting instructions notification above
    return (
        <ol type="1" className="result-report__list">
            { reportState.data.map((v, i) => <li key={i} className="result-report__item">{v}</li>)}
        </ol>
    )
}


const ResultReport = () => {
    const reportResponse = useRecoilValue(robotReportQuery)

    return (
        <div className="result-report">
            <div className="result-report__header">Mars Robot States</div>
            <React.Suspense fallback={<div>Loading...</div>}>
                { render(reportResponse) }
            </React.Suspense>
        </div>
    )
}

export default ResultReport;

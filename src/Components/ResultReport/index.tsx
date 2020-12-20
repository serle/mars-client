import React from 'react';
import './ResultReport.css';

import { useRecoilValue } from "recoil";

import robotReportState, {RobotReport} from "../../State/robotReport";

//renders the reportState
function render(reportState:RobotReport) {
    if (reportState.error) return <div className="result-report__error">{reportState.error}</div>
    if (reportState.data.length === 0) return <div className="result-report__empty">Awaiting instructions...</div>

    return (
        <ul className="result-report__list">
            { reportState.data.map(v => <li className="result-report__item">{v}</li>)}
        </ul>
    )
}


const ResultReport = () => {
    const reportState = useRecoilValue(robotReportState)

    return (
        <div className="result-report">
            <div className="result-report__header">Mars Report</div>
            <React.Suspense fallback={<div>Loading...</div>}>
                { render(reportState) }
            </React.Suspense>
        </div>
    )
}

export default ResultReport;

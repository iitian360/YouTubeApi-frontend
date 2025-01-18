
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ChartComponent from "./ChartComponent.js";
import ChartBar from "./ChartBar.js"


function AnalysisPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = location.state || {};  // Default to an empty object if state is undefined

    // Ensure that the data exists before rendering
    const handleBack = () => {
        navigate('/');
    }
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bar_cont">
            <h3>Analysis Results</h3>
            <div className='bar_primary'>
                <div className="analysis">
                    <ChartBar data={data} />
                </div>
                <div className="analysis">
                    <h4>Total Comments</h4>
                    <span style={{ 'fontWeight': 'bold', 'fontSize': '30px' }}>{data.totalComment}</span>
                    <div className="scoreBox">
                        <div className="score">
                            <div>{data.agreeCount}</div>
                            <span>Agree</span>
                        </div>
                        <div className="score">
                            <div>{data.disagreeCount}</div>
                            <span>Disagree</span>
                        </div>
                        <div className="score">
                            <div>{data.totalComment - (data.agreeCount + data.disagreeCount)}</div>
                            <span>Neutral</span>
                        </div>
                    </div>
                </div>
            </div>
            <ChartComponent data={data} />
            <button className='backbtn' onClick={handleBack}>Back to input</button>
        </div>
    );
}

export default AnalysisPage;
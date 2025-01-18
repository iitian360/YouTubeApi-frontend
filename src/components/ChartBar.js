import React from 'react';
// import './SentimentBar.css'; // Include CSS file for styling

const SentimentAnalysis = ({ data }) => {
    const totalComments = data.totalComment || data.agreeCount + data.disagreeCount;
    const agreePercentage = ((data.agreeCount / totalComments) * 100).toFixed(2);
    const disagreePercentage = ((data.disagreeCount / totalComments) * 100).toFixed(2);
    const neutralPercentage = (((data.totalComment - (data.disagreeCount + data.agreeCount)) / totalComments) * 100).toFixed(2);

    return (
        <div className='second_bar'>
            <h2>Sentiment Analysis</h2>
            <div className="sentiment-bar">
                <div className="label">
                    <div>Agree</div>
                    <div>{agreePercentage}%</div>
                </div>
                <div className="bar-container">
                    <div className="bar agree" style={{ width: `${agreePercentage}%` }}>
                        
                    </div>
                </div>
            </div>
            <div className="sentiment-bar">
                <div className="label">
                    <div>Disagree</div>
                    <div>{disagreePercentage}%</div>
                </div>
                <div className="bar-container">
                    <div className="bar disagree" style={{ width: `${disagreePercentage}%` }}>
                        
                    </div>
                </div>
            </div>
            <div className="sentiment-bar">
                <div className="label">
                    <div>Neutral</div>
                    <div>{neutralPercentage}%</div>
                </div>
                <div className="bar-container">
                    <div className="bar disagree" style={{ width: `${neutralPercentage}%` }}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentimentAnalysis;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

const PlanDetails = ({plan}) => {
    const back = function () {
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    return (
        <div className="App">
            <header>
                <span 
                  className="Back-button"
                  onClick={back}>Back</span>
                <span>Plan Details</span>
            </header>
            <div className="Img-upload">
                <span>Upload photos of your medical insurance card</span>
            </div>
            <div className="Section Information">
                <div>Blue Cross Blue Shield PPO</div>
                <div className="Subtext">By Blue Cross Blue Shield</div>
                <div>
                    <a>800-555-6767</a>
                </div>
                <div>
                    <a>https://www.bcbsil.com</a>
                </div>
            </div>
            <hr/>
            <div id="Plan-switch">
                <button className="Selection-button Selected">Activity</button>
                <button className="Selection-button">Account Details</button>
            </div>
            <hr/>
            <div className="Deductible Section">
                <span>Deductible</span>
                <span className="Deductible Balance-amount">$2,000.00</span>
                <div className="Percent-bar"></div>
                <div className="Deductible Subtext">
                    <span>You are </span>
                    <span className="Amount">$359.53</span>
                    <span> away from your deductible</span>
                </div>
            </div>
            <hr/>
            <div className="Deductible Section">
                <span>Out of Pocket</span> 
                <span className="Deductible Balance-amount">$6,000.00</span>
                <div className="Percent-bar"></div>
                <div className="Deductible Subtext">
                    <span>You are </span>
                    <span className="Deductible Subtext Amount">$4,359.53</span>
                    <span> away from your out of pocket max</span>
                </div>
            </div>
            <hr/>
            <div>
                <div className="Section Wide">Claims</div>
                <hr/>
                <div className="Partition Service">
                    <span>Swanson Family Medicine</span>
                    <span>$109.92</span>
                    <span>8/4/2018</span>
                </div>
                <hr/>
                <div className="Partition Service">
                    <span>Modern Day Dentistry</span>
                    <span>$39.29</span>
                    <span>7/23/2018</span>
                </div>
                <hr/>
                <div className="Partition Service">
                    <span>Pediatric Associates</span>
                    <span>$201.23</span>
                    <span>7/23/2018</span>
                </div>
                <hr/>
                <div className="Partition Service">
                    <span>CVS</span>
                    <span>$5.32</span>
                    <span>7/1/2018</span>
                </div>
            </div>
        </div>
    );
}

export default PlanDetails;
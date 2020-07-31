import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, Switch, Slider } from 'antd';

const dateFormat = 'YYYY/MM/DD';

const MainBoard = () => {
  const [showHideCal, setShowHideCal] = useState(false);
  
  return (
    <div className="container m-5">
      <div className="row">
        <div
          className="calendar-container"
          onClick={() => setShowHideCal(!showHideCal)}
        >
          <div>
            <FontAwesomeIcon icon={faSearch} size="sm" color="#3e5561" />
          </div>
          <div className="search-text-container">
            <DatePicker format={dateFormat} placeholder="Search by date" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="dashboard-services-main-container">
          <div className="dashboard-services-container">
            <div className="dashboard-service-header">
              <div>
                <span className="dashboard-service-name">1st service</span>
              </div>
              <div>
                <Switch
                  defaultChecked
                  onChange={() => console.log('Switched')}
                />
              </div>
            </div>
            <div className="dashboard-service-main">
              <div className="dashboard-stats-container">
                <div>
                  <span className="dashboard-service-seats">400</span>
                </div>
                <div>
                  <span className="dashboard-seats-label">
                    Confirmed bookings
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={require('../../../assets/dash-report.png')}
                  className="dash-report"
                  alt="report"
                />
              </div>
            </div>
            <div className="dashboard-service-footer">
              <Slider
                tooltipVisible
                value={65}
                tipFormatter={(value) => `${value}%`}
              />
            </div>
          </div>
          <div className="dashboard-services-container">
            <div className="dashboard-service-header">
              <div>
                <span className="dashboard-service-name">2nd service</span>
              </div>
              <div>
                <Switch
                  defaultChecked
                  onChange={() => console.log('Switched')}
                />
              </div>
            </div>
            <div className="dashboard-service-main">
              <div className="dashboard-stats-container">
                <div>
                  <span className="dashboard-service-seats">400</span>
                </div>
                <div>
                  <span className="dashboard-seats-label">
                    Confirmed bookings
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={require('../../../assets/dash-report.png')}
                  className="dash-report"
                  alt="report"
                />
              </div>
            </div>
            <div className="dashboard-service-footer">
              <Slider
                tooltipVisible
                value={65}
                tipFormatter={(value) => `${value}%`}
              />
            </div>
          </div>
          <div className="dashboard-services-container">
            <div className="dashboard-service-header">
              <div>
                <span className="dashboard-service-name">3rd service</span>
              </div>
              <div>
                <Switch
                  defaultChecked
                  onChange={() => console.log('Switched')}
                />
              </div>
            </div>
            <div className="dashboard-service-main">
              <div className="dashboard-stats-container">
                <div>
                  <span className="dashboard-service-seats">400</span>
                </div>
                <div>
                  <span className="dashboard-seats-label">
                    Confirmed bookings
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={require('../../../assets/dash-report.png')}
                  className="dash-report"
                  alt="report"
                />
              </div>
            </div>
            <div className="dashboard-service-footer">
              <Slider
                tooltipVisible
                value={65}
                tipFormatter={(value) => `${value}%`}
              />
            </div>
          </div>
          <div className="dashboard-services-container">
            <div className="dashboard-service-header">
              <div>
                <span className="dashboard-service-name">4th service</span>
              </div>
              <div>
                <Switch
                  defaultChecked
                  onChange={() => console.log('Switched')}
                />
              </div>
            </div>
            <div className="dashboard-service-main">
              <div className="dashboard-stats-container">
                <div>
                  <span className="dashboard-service-seats">400</span>
                </div>
                <div>
                  <span className="dashboard-seats-label">
                    Confirmed bookings
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={require('../../../assets/dash-report.png')}
                  className="dash-report"
                  alt="report"
                />
              </div>
            </div>
            <div className="dashboard-service-footer">
              <Slider
                tooltipVisible
                value={65}
                tipFormatter={(value) => `${value}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;

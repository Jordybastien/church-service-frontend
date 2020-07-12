import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { Button, Progress, Modal } from 'antd';
import TextBox from '../components/textbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const options = [
  { value: 'kinyarwanda', label: 'Kinyarwanda' },
  { value: 'english', label: 'English' },
];

class Homepage extends Component {
  state = {
    selectedOption: null,
    modal1Visible: false,
    loading: false,
  };

  handleSelect = () => {
    console.log('======> Clicked');
  };

  handleSubmit = () => this.setState({ loading: true });

  handleRequest = () => this.setState({ modal1Visible: true });
  render() {
    const { selectedOption, modal1Visible, loading } = this.state;
    return (
      <Fragment>
        <Modal
          centered
          visible={modal1Visible}
          footer={null}
          onCancel={() => this.setState({ modal1Visible: false })}
        >
          <div className="container">
            <div className="row mb-5">
              <div className="modal-header-info">
                <div>
                  <span className="modal-title">1st service</span>
                </div>
                <div>
                  <span className="modal-time">7:30 - 8:30</span>
                </div>
              </div>
            </div>
            <div className="row txt-box-container">
              <div>
                <span className="input-label">Full Names</span>
              </div>
              <div>
                <TextBox name="fullName" />
              </div>
            </div>
            <div className="row txt-box-container">
              <div>
                <span className="input-label">Phone Number</span>
              </div>
              <div>
                <TextBox name="phone" />
              </div>
            </div>
            <div className="row txt-box-container">
              <div>
                <span className="input-label">Home Address</span>
              </div>
              <div>
                <TextBox name="address" />
              </div>
            </div>
            <div className="row txt-box-container">
              <div>
                <span className="input-label">Age</span>
              </div>
              <div>
                <TextBox name="age" />
              </div>
            </div>
            <div className="submit-btn-container">
              <Button
                type="primary"
                className="custom-btn"
                onClick={() => this.handleSubmit()}
              >
                {loading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    size="sm"
                    color="#fff"
                    className="ml-2"
                  />
                ) : (
                  'Register'
                )}
              </Button>
            </div>
          </div>
        </Modal>
        <div className="main-container">
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-6 d-flex justify-content-center">
                <div>
                  <img
                    src={require('../assets/logo.png')}
                    alt="ZTCC"
                    className="logo"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-end pt-4">
                  <Select
                    value={selectedOption}
                    onChange={this.handleSelect}
                    options={options}
                    placeholder="Language"
                    className="language-select"
                    isSearchable={false}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 pt-5">
                <div className="pt-5">
                  <div>
                    <span className="header-text"> Welcome to ZTCC</span>
                  </div>
                  <div>
                    <span className="register-text">
                      Register here for Zion Temple Ngoma church services.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="services-card">
                  <div className="date-box mb-5">
                    <span className="date-box-label">Jul</span>
                    <span className="date-box-label">12</span>
                  </div>
                  <div className="services-container">
                    <div className="border-bottom single-service">
                      <div className="service">
                        <div className="service-info">
                          <div>
                            <span className="service-title">1st service</span>
                          </div>
                          <div>
                            <span className="service-time">7:30 - 8:30</span>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="primary"
                            className="custom-btn"
                            onClick={() => this.handleRequest()}
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                      <div className="stats">
                        <div className="stat-graph">
                          <Progress percent={70} showInfo={false} />
                        </div>
                        <div className="stat-text">50 seats left</div>
                      </div>
                    </div>
                    <div className="border-bottom single-service">
                      <div className="service">
                        <div className="service-info">
                          <div>
                            <span className="service-title">2nd service</span>
                          </div>
                          <div>
                            <span className="service-time">9:30 - 10:30</span>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="primary"
                            className="custom-btn"
                            onClick={() => this.handleRequest()}
                            disabled={true}
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                      <div className="stats">
                        <div className="stat-graph">
                          <Progress percent={100} showInfo={false} />
                        </div>
                        <div className="stat-text full-service">
                          Full service
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom single-service">
                      <div className="service">
                        <div className="service-info">
                          <div>
                            <span className="service-title">3rd service</span>
                          </div>
                          <div>
                            <span className="service-time">11:30 - 12:30</span>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="primary"
                            className="custom-btn"
                            onClick={() => this.handleRequest()}
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                      <div className="stats">
                        <div className="stat-graph">
                          <Progress percent={0} showInfo={false} />
                        </div>
                        <div className="stat-text">350 seats left</div>
                      </div>
                    </div>
                    <div className="mb-5 single-service">
                      <div className="service">
                        <div className="service-info">
                          <div>
                            <span className="service-title">4th service</span>
                          </div>
                          <div>
                            <span className="service-time">13:30 - 14:30</span>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="primary"
                            className="custom-btn"
                            onClick={() => this.handleRequest()}
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                      <div className="stats">
                        <div className="stat-graph">
                          <Progress percent={70} showInfo={false} />
                        </div>
                        <div className="stat-text">50 seats left</div>
                      </div>
                    </div>
                  </div>
                  <div className="services-footer">
                    <div className="footer-element">
                      <div>
                        <span className="booked"></span>
                      </div>
                      <span>booked</span>
                    </div>
                    <div className="footer-element">
                      <div>
                        <span className="available"></span>
                      </div>
                      <span>available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Homepage;

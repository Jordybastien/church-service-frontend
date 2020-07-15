import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { Button, Progress, Modal } from 'antd';
import { connect } from 'react-redux';


const options = [
  { value: 'kinyarwanda', label: 'Kinyarwanda' },
  { value: 'english', label: 'English' },
];

class Homepage extends Component {
  state = {
    selectedOption: null,
    modal1Visible: false,
    loading: false,
    serviceId: null,
    service: null,
  };

  handleSelect = () => {
    console.log('======> Clicked');
  };

  handleSubmit = () => this.setState({ loading: true });

  handleRequest = (serviceId, service) =>
    this.setState({ modal1Visible: true, serviceId, service });

  render() {
    const { selectedOption, modal1Visible, loading } = this.state;
    const { services } = this.props;
    console.log('=======>services', services);

    return (
      <Fragment>
        <Modal
          centered
          visible={modal1Visible}
          footer={null}
          onCancel={() => this.setState({ modal1Visible: false })}
        >

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
              <div className="col-md-7 custom-padding-top">
                <div className="custom-padding-top">
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
                    {services.length !== 0 &&
                      services.map((service, index) => (
                        <div
                          className={`${
                            index + 1 !== services.length
                              ? 'border-bottom'
                              : 'mb-5'
                          } single-service`}
                          key={service.serviceId}
                        >
                          <div className="service">
                            <div className="service-info">
                              <div>
                                <span className="service-title">
                                  {service.title}
                                </span>
                              </div>
                              <div>
                                <span className="service-time">
                                  {service.startAt.substr(0, 5)} -{' '}
                                  {service.endAt.substr(0, 5)}
                                </span>
                              </div>
                            </div>
                            <div>
                              <Button
                                type="primary"
                                className="custom-btn"
                                onClick={() =>
                                  this.handleRequest(service.serviceId, service)
                                }
                                disabled={
                                  service.numberOfSeats - service.takenSeats ===
                                  0
                                }
                              >
                                Register
                              </Button>
                            </div>
                          </div>
                          <div className="stats">
                            <div className="stat-graph">
                              <Progress
                                percent={
                                  (service.takenSeats * 100) /
                                  service.numberOfSeats
                                }
                                showInfo={false}
                              />
                            </div>
                            <div className="stat-text">
                              {service.numberOfSeats - service.takenSeats} seats
                              left
                            </div>
                          </div>
                        </div>
                      ))}
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

const mapStateToProps = ({ services }) => {
  return {
    services: Object.values(services),
  };
};

export default connect(mapStateToProps)(Homepage);

import React, { Component } from 'react';
import TextBox from '../textbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class BookService extends Component {
  state = {};

  handleFormSubmit = () => {
      console.log('======>CLicked')
  };

  render() {
    return (
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
            onClick={() => this.handleFormSubmit()}
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
    );
  }
}

export default BookService;

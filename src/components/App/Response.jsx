import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import './Response.css';

const Request = ({ apiResponse }) => (
  <div>
    <p className="api-response">
      <ReactJson name="Response" src={apiResponse}/>
    </p>
  </div>
);

Request.propTypes = {
  apiResponse: PropTypes.object,
};

export default Request;

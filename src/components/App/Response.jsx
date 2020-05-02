import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ apiResponse }) => (
  <div>
    { JSON.stringify(apiResponse)}
  </div>
);

Request.propTypes = {
  apiResponse: PropTypes.object,
};

export default Request;

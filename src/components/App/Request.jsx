import React from 'react';
import PropTypes from 'prop-types';

const Request = () => (
  <form>
    URL:<input type="text"/>
    Method:
    <input type="radio" name="method"/> get
    <input type="radio" name="method"/> post
    <input type="radio" name="method"/> put
    <input type="radio" name="method"/> delete
    JSON: <textarea></textarea>
    <button>Go!</button>
  </form>
);

Request.propTypes = {

};

export default Request;

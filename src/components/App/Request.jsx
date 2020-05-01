import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ onSubmit, url, onChange, body }) => (
  <form onSubmit={onSubmit}>
    URL:<input type="text" value={url}/>
    Method:
    <input type="radio" name="method" value="GET" onChange={onChange}/> Get
    <input type="radio" name="method" value="POST" onChange={onChange}/> Post
    <input type="radio" name="method" value="PUT" onChange={onChange}/> Put
    <input type="radio" name="method" value="DELETE" onChange={onChange}/> Delete
    JSON: <textarea>{ body }</textarea>
    <button>Go!</button>
  </form>
);

Request.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string,
  body: PropTypes.string,
};

export default Request;

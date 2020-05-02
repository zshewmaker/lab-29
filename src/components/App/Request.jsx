import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ onSubmit, url, onHttpMethodChange, onUrlChange, onBodyChange, body }) => (
  <form onSubmit={onSubmit}>
    URL:<input type="text" value={url} onChange={onUrlChange}/>
    Method:
    <input type="radio" name="method" value="GET" onChange={onHttpMethodChange}/> Get
    <input type="radio" name="method" value="POST" onChange={onHttpMethodChange}/> Post
    <input type="radio" name="method" value="PUT" onChange={onHttpMethodChange}/> Put
    <input type="radio" name="method" value="DELETE" onChange={onHttpMethodChange}/> Delete
    JSON: <textarea onChange={onBodyChange}>{ body }</textarea>
    <button>Go!</button>
  </form>
);

Request.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onHttpMethodChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  url: PropTypes.string,
  body: PropTypes.string,
};

export default Request;

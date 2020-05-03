import React from 'react';
import PropTypes from 'prop-types';
import './Request.css';

const Request = ({ onSubmit, url, onHttpMethodChange, onUrlChange, onBodyChange, body }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input type="text" value={url} onChange={onUrlChange} placeholder="URL" />
    </div>
    <label>
      <input id="method-get" type="radio" name="method" value="GET" onChange={onHttpMethodChange} checked="checked" />
      <span>Get</span>
    </label>
    <label>
      <input id="method-post" type="radio" name="method" value="POST" onChange={onHttpMethodChange} />
      <span>Post</span>
    </label>
    <label>
      <input id="method-put" type="radio" name="method" value="PUT" onChange={onHttpMethodChange} />
      <span>Put</span>
    </label>
    <label>
      <input id="method-delete" type="radio" name="method" value="DELETE" onChange={onHttpMethodChange} />
      <span>Delete</span>
    </label>
    <textarea onChange={onBodyChange} placeholder="Raw JSON Body" value={body}></textarea>
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

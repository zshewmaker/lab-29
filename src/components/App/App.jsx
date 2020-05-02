import React, { Component } from 'react';
import Header from './Header.jsx';
import Response from './Response.jsx';
import Request from './Request.jsx';

export default class App extends Component {

  state = {
    httpMethod: '',
    url: '',
    body: ''
  }

handleSubmit = event => {
  event.preventDefault();
  console.log(this.state.httpMethod);
  console.log(this.state.url);
  console.log(this.state.body);
};

handleHttpMethodChange = event => {
  this.setState({ httpMethod: event.currentTarget.value });
};

handleUrlChange = event => {
  this.setState({ url: event.currentTarget.value });
};

handleBodyChange = event => {
  this.setState({ body: event.currentTarget.value });
};

render() {
  return (
    <div>
      <Header></Header>
      <Request url={this.state.url} body={this.state.body} onSubmit={this.handleSubmit} onHttpMethodChange={this.handleHttpMethodChange} onUrlChange={this.handleUrlChange} onBodyChange={this.handleBodyChange}></Request>
      <Response></Response>
    </div> 
  )
  ;
}}


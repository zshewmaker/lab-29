import React, { Component } from 'react';
import Header from './Header.jsx';
import Response from './Response.jsx';
import Request from './Request.jsx';

export default class App extends Component {

  state = {
    httpMethod: 'GET',
    url: '',
    body: '',
    apiResponse: '',
  }

handleSubmit = event => {
  event.preventDefault();
  if(this.state.httpMethod === 'GET' || this.state.httpMethod === 'DELETE') {
    fetch(this.state.url, { method:this.state.httpMethod })
      .then(res => res.json())
      .then(response => {
        this.setState({ apiResponse:response });
        console.log(resdponse);
      });
  } else {
    fetch(this.state.url, { method:this.state.httpMethod, body:this.state.body })
      .then(res => res.json())
      .then(response => this.setState({ apiResponse:response }));
  }
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
      <Response apiResponse={this.state.apiResponse}></Response>
    </div> 
  )
  ;
}}


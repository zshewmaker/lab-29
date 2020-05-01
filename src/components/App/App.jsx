import React from 'react';
import Header from './Header.jsx';
import Response from './Response.jsx';
import Request from './Request.jsx';

let handleSubmit = event => {
  event.preventDefault();
};

export default function App() {
  return (
    <div>
      <Header></Header>
      <Request onSubmit={handleSubmit}></Request>
      <Response></Response>
    </div> 
  )
  ;
} 

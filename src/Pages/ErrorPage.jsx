import React from 'react';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

  const naviget = useNavigate();

  const backToHome = () => {
    naviget("/");
  }

  return (
    <div className="error-page">
      <h1>Page not found</h1>
      <h2>404</h2>
      <button onClick={() => backToHome()}>Back to Home!</button>
    </div>
  )
}

export default ErrorPage;

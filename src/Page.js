import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
function Page() {
  const location = useLocation()
  const history=useNavigate()
  const {logged}=location.state || {logged: []};
  if(logged) {
    history( null,null,location.href);
    window.onpopstate = function(e) {
      e.preventDefault()
      history(1);
    
    };
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Welcome to the page😊</h1>
    </div>
  )
}

export default Page

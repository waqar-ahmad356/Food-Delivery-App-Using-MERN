import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#2C3A47"}}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/"><span style={{color:"#25CCF7"}}>Food</span><span style={{color:"#55E6C1"}}>Cottage</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav ml-auto" >
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/" style={{color:"#EAB543"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login" style={{color:"#EAB543"}}>Login</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar

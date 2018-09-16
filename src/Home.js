import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
     <div className="App">
        <h1> List of Contact</h1>  
        <div className="body-App">
        <Link to="/contacts">
        <button style={{width:"200px", height:"100px", marginLeft:"10px"}}> List Contact </button>
        </Link>
        <Link to="/addContact">
        <button style={{width:"200px", height:"100px", marginLeft:"10px"}}> Add Contact </button>
        </Link>
        </div>
      </div>
    );
};

export default Home;
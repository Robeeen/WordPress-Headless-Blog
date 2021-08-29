import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () =>{
    return ([
        <Link to ="/" className="links"> Home |</Link>,  
        <Link to ="/category" className="links"> Cat |</Link>  
    ] 
        );
};

export default Menu;
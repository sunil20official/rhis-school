import React from 'react';
import Management from '../../shared/management/Management';
import Staff from '../../shared/staff/Staff';

const About = () => {
  return (
    <div>
      <h1 style={{margin:"5rem auto 2rem" ,
      width:"60%",
      borderBottom:"3px solid  #f89503",
      paddingBottom:"1rem",
       textAlign:"center"
       }}>About Us</h1>
      <Management/>
      <Staff/>
    </div>
  )
}

export default About
import React from 'react';
import PropTypes from 'prop-types'; 

export default function CompName1({name,msg='how are you'}) {//msg is a "Default prop' which will be passed when no prop passed from parent side
  return <h2>hii {name},{msg}</h2>
}

CompName1.propTypes={       
    name:PropTypes.string,            //Optinal Props:optional to pass
    msg :PropTypes.string.isRequired, //Requiring Props:this makes the prop  mandatory to pass,          
}
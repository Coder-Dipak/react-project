import React from 'react';
import PropTypes from 'prop-types'; //(impt:to import PropType)

export default function CompName({name,age}) {//name is string  and age is number
  return <h2>hii {name}, age is {age}</h2>
}

//to add extra validation by childComponent recieved from parent & thi is optional to use
CompName.propTypes={       //componentName.proptype={attribute:proptype.dataType}
    name:PropTypes.string,     
    age :PropTypes.string,   //this will give console error // age :PropTypes.number,//this wont give console error
}

//note:even with validation from child side,if parent doesnt pass anything,that is still fine

// other Proptypes:-

//   PropTypes.array,
//   PropTypes.bool,
//   PropTypes.func,
//   PropTypes.number,
//   PropTypes.object,
//   PropTypes.string,
//   PropTypes.symbol,
//   PropTypes.element,
//   PropTypes.oneOf(['News', 'Photos']),
//   PropTypes.arrayOf(PropTypes.number),
//   PropTypes.shape({
//     color: PropTypes.string,
//     fontSize: PropTypes.number
//   })



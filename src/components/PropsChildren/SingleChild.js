import React from 'react';
import PropTypes from 'prop-types'//impt command

export default function SingleChild(props) {
  return (
    <div>{props.children}</div>
  )
}
SingleChild.propTypes={
    children:PropTypes.element //this ensured the child will recieve single element from its parent or will give error in console
}

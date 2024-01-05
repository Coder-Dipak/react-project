import React, { Component } from 'react'

class ChildMemo extends Component {//'export default' should be removed and included in the react.memo line

  render() {
    console.log('Child render() method called')
    return <><hr/>
      <div>ChildMemo</div>
      <div>color value is {this.props.color}</div>
    </>
  }
}
export default React.memo(ChildMemo);
//this will ensure the child element should be re-rendered only if its prop variable value is changed,not any other state variable from parent


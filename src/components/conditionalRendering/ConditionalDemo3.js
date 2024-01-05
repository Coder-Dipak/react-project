import React from "react";

export default function ConditionalDemo3() {
  let unReadMessages = ['sfdxdg'];
  return (
    <>
      <h1>Hello!</h1>

      {/*using terenary operator*/}
      {unReadMessages.length > 0 ? (<h2>You have {unReadMessages.length} unread messages.</h2>):null}

      {/* using 'Logical &&' operator no neef for false condition part */}
      {unReadMessages.length > 0 && (<h2>You have {unReadMessages.length} unread messages.</h2>)}

    </>
  );
}

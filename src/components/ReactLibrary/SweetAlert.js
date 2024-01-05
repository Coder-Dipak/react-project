import React from "react";
import Swal from "sweetalert2"; //importing sweet alert library (installed by cmd: npm i sweetalert2)

export default function SweetAlert() {
  let openAlert = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  let openAlertConfirm = () => {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  };
  return (
    <>
      <h3>sweetAlert demo</h3>
      <button onClick={openAlert}>click me</button>
      <button onClick={openAlertConfirm}>click me -2</button>
    </>
  );
}

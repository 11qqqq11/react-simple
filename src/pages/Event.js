import React from "react";
import "../styles/Event.css";


function Event() {
  return (
    <>

        <div className="ev">
      <h1 className="evTitle">Sự Kiện</h1>
      <img className="sk" alt="Khai Truong" src={require('../images/sukien.PNG')} />
    </div>
    </>

  );
}

export default Event;

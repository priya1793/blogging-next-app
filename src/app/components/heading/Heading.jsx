import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title my-5">
          <h1 className="title">{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Heading;

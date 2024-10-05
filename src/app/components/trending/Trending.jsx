import React from "react";
import Heading from "../heading/Heading";
import Categories from "../categories/Categories";

const Trending = () => {
  return (
    <div className="trending-topics bg-color-grey pt-4 pb-5">
      <div className="container pb-5">
        <Heading heading="Trending Topics" />
        <div className="row">
          <div className="col-lg-12">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

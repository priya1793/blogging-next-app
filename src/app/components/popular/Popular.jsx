import React from "react";
import Tabs from "../tabs/Tabs";
import { popularTabs } from "@/app/data";
import Heading from "../heading/Heading";

const Popular = () => {
  return (
    <div className="popular-posts bg-color-grey pb-5">
      <div className="container">
        <Heading heading="Most Popular" />

        <div className="row">
          <div className="col-lg-12">
            <Tabs tabs={popularTabs} title="Popular" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

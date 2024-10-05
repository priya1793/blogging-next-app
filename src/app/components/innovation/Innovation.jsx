import React from "react";
import Heading from "../heading/Heading";
import MultiColumnSlider from "../multiColumnSlider/MultiColumnSlider";
import Tabs from "../tabs/Tabs";
import { innovationTabs } from "@/app/data";

const Innovation = () => {
  return (
    <div className="container">
      <div className="row">
        <Heading heading="Innovation & Tech" />
      </div>

      <div className="row">
        <div className="col-12">
          <Tabs tabs={innovationTabs} title="Innovation" />
        </div>
      </div>

      {/* <div className="row">
        <div className="col-12">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="gadget-tab"
                data-bs-target="#gadget"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-controls="gadget"
                aria-selected="true"
              >
                Gadget
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="design-tab"
                data-bs-target="#design"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-controls="design"
                aria-selected="true"
              >
                Design
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="marketing-tab"
                data-bs-target="#marketing"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-controls="marketing"
                aria-selected="true"
              >
                Marketing
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="technology-tab"
                data-bs-target="#technology"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-controls="technology"
                aria-selected="true"
              >
                Technology
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane active"
              id="gadget"
              role="tabpanel"
              aria-labelledby="gadget-tab"
            >
              <MultiColumnSlider category="Gadget" />
            </div>
            <div
              className="tab-pane"
              id="design"
              role="tabpanel"
              aria-labelledby="design-tab"
            >
              <MultiColumnSlider category="Design" />
            </div>
            <div
              className="tab-pane"
              id="marketing"
              role="tabpanel"
              aria-labelledby="marketing-tab"
            >
              <MultiColumnSlider category="Marketing" />
            </div>
            <div
              className="tab-pane"
              id="technology"
              role="tabpanel"
              aria-labelledby="technology-tab"
            >
              <MultiColumnSlider category="Technology" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Innovation;

import React from "react";
import MultiColumnSlider from "../multiColumnSlider/MultiColumnSlider";
import PopularPostsGrid from "../popularPostsGrid/PopularPostsGrid";

const Tabs = ({ tabs, title }) => {
  return (
    <>
      <ul className="nav nav-pills">
        {tabs &&
          tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${tab.id === 1 ? "active" : ""}`}
                id={`${tab.title}-tab`}
                data-bs-target={`#${tab.title}`}
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-controls={`${tab.title}`}
                aria-selected="true"
              >
                {tab.title}
              </button>
            </li>
          ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${tab.id === 1 ? "active" : ""}`}
            id={tab.title}
            role="tabpanel"
            aria-labelledby={`${tab.title}-tab`}
          >
            {title === "Innovation" ? (
              <MultiColumnSlider category={tab.title} />
            ) : (
              <PopularPostsGrid category={tab.title} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;

import React from "react";
import "./SearchWidget.css";
import Image from "next/image";
import WidgetTitle from "../widgetTitle/WidgetTitle";

const SearchWidget = () => {
  return (
    <div className="widget widget_search mb-5">
      <WidgetTitle title="Search" />
      <form>
        <div className="form-group">
          <button type="submit" className="search-button">
            <Image
              src="/img/search-icon.webp"
              alt="search"
              width={24}
              height={24}
            />
          </button>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </form>
    </div>
  );
};

export default SearchWidget;

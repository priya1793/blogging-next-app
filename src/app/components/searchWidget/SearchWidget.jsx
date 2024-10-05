import React from "react";
import "./SearchWidget.css";
import Image from "next/image";
import WidgetTitle from "../widgetTitle/WidgetTitle";
import Search from "../search/Search";

const SearchWidget = () => {
  return (
    <div className="widget widget_search mb-5">
      <WidgetTitle title="Search" />
      <form className="search">
        <Search />
      </form>
    </div>
  );
};

export default SearchWidget;

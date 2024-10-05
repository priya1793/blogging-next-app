import React from "react";
import { popularPosts } from "@/app/data";
import "./SidebarPosts.css";
import WidgetTitle from "../widgetTitle/WidgetTitle";
import SidebarSinglePost from "../sidebarSinglePost/SidebarSinglePost";

const SidebarPosts = () => {
  return (
    <div className="widget widget_postlist">
      <WidgetTitle title="Popular on Blogar" />

      <div className="post-medium-block">
        {popularPosts &&
          popularPosts.map((post) => (
            <SidebarSinglePost key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default SidebarPosts;

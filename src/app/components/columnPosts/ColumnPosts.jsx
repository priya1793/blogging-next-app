import React from "react";
import { columnPosts, trendingCategories } from "@/app/data";
import PostListView from "../postListView/PostListView";
import Heading from "../heading/Heading";
import CategoryWidgets from "../categoryWidgets/CategoryWidgets";
import "./ColumnPosts.css";
import SearchWidget from "../searchWidget/SearchWidget";
import SidebarPosts from "../sidebarPosts/SidebarPosts";

const ColumnPosts = () => {
  return (
    <div className="column-posts">
      <div className="container">
        <Heading heading="Top Stories" />
        <div className="row">
          <div className="col-lg-8 col-xl-8">
            {columnPosts &&
              columnPosts.map((post) => (
                <PostListView post={post} key={post.id} />
              ))}
          </div>

          <div className="col-lg-4 col-xl-4">
            <div className="sidebar-inner">
              <div className="widget widget_categories mb-3">
                <ul>
                  {trendingCategories &&
                    trendingCategories.map((cat, index) => {
                      if (index + 1 < 5)
                        return <CategoryWidgets key={cat.id} category={cat} />;
                    })}
                </ul>
              </div>

              <SearchWidget />

              <SidebarPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnPosts;

"use client";

import React from "react";
import LargePost from "../largePost/LargePost";
import SmallPost from "../smallPost/SmallPost";
import { popularPosts } from "@/app/data";

const PopularPostsGrid = ({ category }) => {
  return (
    <>
      {popularPosts &&
        popularPosts.map((post) => {
          if (post.category === category)
            return (
              <div className="row mt-5" key={post.id}>
                <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                  {post.size === "lg" && <LargePost post={post} />}
                </div>

                <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                  <div className="row">
                    {post.otherPosts &&
                      post.otherPosts.map((item) => (
                        <div
                          className="col-xl-12 col-lg-12 col-md-6 col-12"
                          key={item.id}
                        >
                          <SmallPost post={item} category={post.category} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
        })}
    </>
  );
};

export default PopularPostsGrid;

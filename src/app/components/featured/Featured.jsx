import React from "react";
import Heading from "../heading/Heading";
import { featuredPosts } from "@/app/data";
import FeaturedPostContent from "../featuredPostContent/FeaturedPostContent";

const Featured = () => {
  return (
    <div className="featured bg-color-grey pt-4 pb-5">
      <div className="container pb-4">
        <Heading heading="More Featured Posts" />

        <div className="row">
          {featuredPosts &&
            featuredPosts.map((post) => (
              <div className="col-lg-6 col-xl-6 col-md-12 col-12" key={post.id}>
                <FeaturedPostContent post={post} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;

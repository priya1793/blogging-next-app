import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostThumbnail from "../postThumbnail/PostThumbnail";
import PostContent from "../postContent/PostContent";

const FeaturedPostContent = ({ post }) => {
  return (
    <div className="featured-content-block">
      <PostContent
        post={post}
        hasButton={false}
        centerCategory={false}
        hasAuthor={true}
        fontSize="24"
        truncate={false}
      />

      <PostThumbnail post={post} width="250" height="250" />
    </div>
  );
};

export default FeaturedPostContent;

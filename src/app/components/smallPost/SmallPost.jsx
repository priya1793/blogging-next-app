import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./SmallPost.css";
import PostThumbnail from "../postThumbnail/PostThumbnail";
import PostContent from "../postContent/PostContent";

const SmallPost = ({ post, category }) => {
  return (
    <div className="post-grid post-grid-sm mb-5">
      <PostThumbnail post={post} width="495" height="294" />

      <div className="post-grid-content">
        <PostContent
          post={post}
          hasButton={true}
          centerCategory={false}
          hasAuthor={false}
          category={category}
          fontSize="24"
          truncate={false}
        />
      </div>
    </div>
  );
};

export default SmallPost;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./LargePost.css";
import PostContent from "../postContent/PostContent";
import PostThumbnail from "../postThumbnail/PostThumbnail";

const LargePost = ({ post }) => {
  return (
    <div className="post-grid post-grid-large">
      <PostThumbnail post={post} width="705" height="660" />

      <div className="post-grid-content">
        <PostContent
          post={post}
          hasButton={false}
          centerCategory={false}
          hasAuthor={true}
          fontSize="30"
          truncate={false}
        />
      </div>
    </div>
  );
};

export default LargePost;

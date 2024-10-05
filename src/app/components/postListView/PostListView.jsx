import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostContent from "../postContent/PostContent";
import "./PostListView.css";
import PostThumbnail from "../postThumbnail/PostThumbnail";

const PostListView = ({ post }) => {
  return (
    <div className="post-list-view d-flex mb-5">
      <PostThumbnail post={post} width="295" height="250" />

      <PostContent
        post={post}
        hasButton={false}
        centerCategory={false}
        hasAuthor={true}
        fontSize="24"
        truncate={false}
        isSidePost={false}
      />
    </div>
  );
};

export default PostListView;

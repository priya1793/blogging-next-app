import React from "react";
import PostThumbnail from "../postThumbnail/PostThumbnail";
import PostContent from "../postContent/PostContent";

const SidebarSinglePost = ({ post }) => {
  return (
    <div className="post-medium mb-3">
      <PostThumbnail post={post} width="100" height="100" />

      <PostContent
        post={post}
        hasButton={false}
        centerCategory={false}
        hasAuthor={false}
        fontSize="16"
        truncate={false}
        isSidePost={true}
      />
    </div>
  );
};

export default SidebarSinglePost;

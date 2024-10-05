import React from "react";
import PostThumbnail from "../postThumbnail/PostThumbnail";
import PostContent from "../postContent/PostContent";

const SidebarSinglePost = ({ post }) => {
  return (
    <div className="post-medium mb-3">
      <PostThumbnail post={post} width="100" height="100" />
      {/* <div className="post-thumbnail">
        <Link href="">
          <Image
            src={post.thumbnail}
            width={100}
            height={100}
            alt={post.title}
          />
        </Link>
      </div> */}

      <PostContent
        post={post}
        hasButton={false}
        centerCategory={false}
        hasAuthor={false}
        fontSize="16"
        truncate={false}
        isSidePost={true}
      />

      {/* <div className="post-content">
        <h6 className="title">
          <a href="">
            {post.title}
          </a>
        </h6>
        <div className="post-meta">
          <ul className="post-meta-list">
            <li>{author.joinedDate}</li>
            <li>{author.views} Views</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default SidebarSinglePost;

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
      {/* <div className="post-content">
        <div className="post-cat">
          <div className="post-cat-list">
            <a className="flip-item" href="">
              <span data-text="Design">{post.category}</span>
            </a>
          </div>
        </div>

        <h2 className="title mt-4 d-block">
          <a href="">{post.title}</a>
        </h2>

        <div className="post-meta-wrapper with-button">
          <div className="post-meta">
            <div className="post-author-avatar border-rounded">
              <Image
                width={50}
                height={50}
                alt={post.title}
                src={post.author.img}
              />
            </div>

            <div className="content">
              <h6 className="post-author-name">
                <span>{post.author.name}</span>
              </h6>
              <ul className="post-meta-list">
                <li>{post.author.joinedDate}</li>
                <li>{post.author.views} Views</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <PostThumbnail post={post} width="250" height="250" />
      {/* <div className="post-thumbnail">
        <Link href="">
          <Image
            src={post.thumbnail}
            width={250}
            height={250}
            alt={post.title}
          />
        </Link>
      </div> */}
    </div>
  );
};

export default FeaturedPostContent;

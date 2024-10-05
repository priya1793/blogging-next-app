import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./PostContent.css";

const PostContent = ({
  post,
  hasButton,
  centerCategory,
  hasAuthor,
  category,
  fontSize,
  truncate,
  isSidePost,
}) => {
  const { author } = post;
  return (
    <div className="post-content">
      {!isSidePost && (
        <div className="post-cat">
          <div
            className={`post-cat-list ${
              centerCategory
                ? "justify-content-center"
                : "justify-content-start"
            }`}
          >
            <Link className="flip-item" href="">
              <span data-text="Design">
                {category ? category : post.category}
              </span>
            </Link>
          </div>
        </div>
      )}

      <h2
        className={`title mt-3 d-block font-${fontSize} ${
          truncate ? "truncate-text" : ""
        }`}
      >
        <a href="">{post.title}</a>
      </h2>

      {isSidePost && (
        <div className="post-meta">
          <ul className="post-meta-list">
            <li>{author.joinedDate}</li>
            <li>{author.views} Views</li>
          </ul>
        </div>
      )}

      {hasAuthor && (
        <div className="post-meta-wrapper with-button">
          <div className="post-meta">
            <div className="post-author-avatar border-rounded">
              <Image width={50} height={50} alt="" src={author.img} />
            </div>

            <div className="content">
              <h6 className="post-author-name">
                <span>{author.name}</span>
              </h6>
              <ul className="post-meta-list">
                <li>{author.joinedDate}</li>
                <li>{author.views} Views</li>
              </ul>
            </div>
          </div>

          {hasButton && (
            <div className="read-more-button">
              <button
                type="button"
                className="btn axil-button button-rounded hover-flip-item-wrapper"
              >
                Read Post
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostContent;

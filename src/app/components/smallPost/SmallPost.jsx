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
      {/* <div className="post-thumbnail">
        <Link href="">
          <span>
            <Image src={post.thumbnail} alt="" width={495} height={294} />
          </span>
        </Link>
      </div> */}

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

        {/* <div className="post-content">
          <div className="post-cat">
            <div className="post-cat-list justify-content-start mb-2">
              <Link className="flip-item" href="">
                <span data-text="Design">{category}</span>
              </Link>
            </div>
          </div>

          <h3 className="title">
            <Link href="">{post.title}</Link>
          </h3>
        </div> */}
      </div>
    </div>
  );
};

export default SmallPost;

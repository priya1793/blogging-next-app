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
      {/* <div className="post-thumbnail">
        <Link href="">
          <span>
            <Image src={post.thumbnail} alt="" width={705} height={660} />
          </span>
        </Link>
      </div> */}

      <div className="post-grid-content">
        <PostContent
          post={post}
          hasButton={false}
          centerCategory={false}
          hasAuthor={true}
          fontSize="30"
          truncate={false}
        />
        {/* <div className="post-content">
            <div className="post-cat">Travel</div>

            <h3 className="title">
              <Link href="">{post.title}</Link>
            </h3>

            <div className="post-meta-wrapper">
              <div className="post-meta">
                <div className="post-author-avatar border-rounded">
                  <Image
                    width={50}
                    height={50}
                    alt=""
                    src="/img/author-b1.webp"
                  />
                </div>

                <div className="content">
                  <h6 className="post-author-name">
                    <span>John Doe</span>
                  </h6>
                  <ul className="post-meta-list">
                    <li>test</li>
                    <li>200 Views</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default LargePost;

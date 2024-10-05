import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostThumbnail = ({ post, width, height }) => {
  return (
    <div className="post-thumbnail">
      <Link href="">
        <span>
          <Image src={post.thumbnail} alt="" width={width} height={height} />
        </span>
      </Link>
    </div>
  );
};

export default PostThumbnail;

"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PostContent from "../postContent/PostContent";
import { posts } from "../../data";
import PostThumbnail from "../postThumbnail/PostThumbnail";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    cssEase: "linear",
  };

  return (
    <div className="slider-container pb-5">
      <Slider {...settings}>
        {posts &&
          posts.map((post) => (
            <div className="content-block" key={post.id}>
              <PostThumbnail post={post} width="1230" height="615" />
              {/* <div className="post-thumbnail">
                <Image
                  src={post.thumbnail}
                  width={1230}
                  height={615}
                  alt={post.title}
                />
              </div> */}

              <PostContent
                post={post}
                hasButton={true}
                centerCategory={false}
                hasAuthor={true}
                fontSize="36"
                truncate={false}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;

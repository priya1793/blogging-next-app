"use client";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MultiColumnSlider.css";
import Link from "next/link";
import { innovationPosts } from "@/app/data";
import PostContent from "../postContent/PostContent";

const MultiColumnSlider = ({ category }) => {
  var settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "60px",
  };

  return (
    <div className="column-slider-container pb-5">
      <Slider {...settings}>
        {innovationPosts &&
          innovationPosts.map((post) => {
            if (post.category === category)
              return (
                <div className="content-block-column" key={post.id}>
                  <PostContent
                    post={post}
                    hasButton={false}
                    centerCategory={true}
                    hasAuthor={false}
                    fontSize="24"
                    truncate={true}
                  />
                  {/* <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <Link className="hover-flip-item-wrapper" href="">
                          <span className="hover-flip-item">
                            <span data-text="Gadget">{post.category}</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h4 className="title">
                      <Link href="">{post.title}</Link>
                    </h4>
                  </div> */}

                  <div className="post-thumbnail">
                    <div className="round-shape">
                      <span className="shape-inner">
                        <span>
                          <Image
                            src="/img/shape-01.webp"
                            width={432}
                            height={77}
                            alt="round-shape"
                          />
                        </span>
                        <Image
                          src="/img/shape-01.webp"
                          width={390}
                          height={77}
                          alt="round-shape"
                          className="shape-img"
                        />
                      </span>
                    </div>

                    <Link href="">
                      <Image
                        src={post.thumbnail}
                        width={390}
                        height={260}
                        alt="post"
                      />
                    </Link>
                  </div>
                </div>
              );
          })}
      </Slider>
    </div>
  );
};

export default MultiColumnSlider;

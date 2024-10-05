import React from "react";
import { trendingCategories } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="list-categories d-flex flex-wrap">
      {trendingCategories &&
        trendingCategories.map((topic) => (
          <div className="single-category" key={topic.id}>
            <div className="inner">
              <Link href="">
                <div className="thumbnail">
                  <span>
                    <Image
                      src={topic.img}
                      alt={topic.title}
                      width={180}
                      height={180}
                    />
                  </span>
                </div>

                <div className="content">
                  <h5 className="title">{topic.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Categories;

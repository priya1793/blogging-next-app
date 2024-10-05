import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./CategoryWidgets.css";

const CategoryWidgets = ({ category }) => {
  return (
    <li className="category-item">
      <Link href="" className="inner">
        <div className="thumbnail">
          <Image
            src={category.img}
            width={50}
            height={50}
            alt={category.title}
          />
        </div>

        <div className="content">
          <h5 className="title">{category.title}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CategoryWidgets;

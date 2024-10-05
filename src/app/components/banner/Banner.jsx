import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container pt-5 pb-3">
      <div className="row pt-5">
        <div className="col-12">
          <Image
            src="/img/banner-03.webp"
            alt="banner"
            width={1230}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

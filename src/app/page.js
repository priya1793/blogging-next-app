import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";
import Banner from "./components/banner/Banner";
import Innovation from "./components/innovation/Innovation";
import MultiColumnSlider from "./components/multiColumnSlider/MultiColumnSlider";
import Trending from "./components/trending/Trending";
import Popular from "./components/popular/Popular";
import ColumnPosts from "./components/columnPosts/ColumnPosts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel />
        <Featured />
        <Banner />
        <Innovation />
        <Trending />
        <ColumnPosts />
        <Popular />
      </main>
    </>
  );
}

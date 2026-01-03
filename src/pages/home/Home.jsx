import React from "react";
import {  FixedSizeList as List } from "react-window";
import {useSelector} from 'react-redux'
import CategoryCard from "./components/CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

const Row = ({ index, style }) => <div style={style}>Row {patients[index].name}</div>;

const patients = Array.from({length: 1000}, function(_, i){
    return {
        id: i+1,
        name: `Patient${i+1}`
    }
})

export const Home = () => {
    const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
     <div className="home-page">

      {/* ================= DISCOUNT SLIDER ================= */}
      <section className="hero-slider">
        <Slider {...sliderSettings}>
          <div className="slide slide-one">
            <h1>🔥 Flat 40% OFF</h1>
            <p>Attack on Titan Collection</p>
          </div>

          <div className="slide slide-two">
            <h1>⚡ New Arrivals</h1>
            <p>Demon Slayer Premium Wear</p>
          </div>

          <div className="slide slide-three">
            <h1>🎌 AnimeWear Originals</h1>
            <p>Limited Edition Drops</p>
          </div>
        </Slider>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <CategoryCard
            title="Oversized Tees"
            subtitle="Street Style Anime Prints"
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
          />

          <CategoryCard
            title="Hoodies"
            subtitle="Winter Anime Drip"
            image="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
          />

          <CategoryCard
            title="Anime Jackets"
            subtitle="Bold & Iconic"
            image="https://images.unsplash.com/photo-1520975922284-7b9581c47d19"
          />

          <CategoryCard
            title="Accessories"
            subtitle="Caps, Bags & More"
            image="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
          />
        </div>
      </section>

    </div>
  );
};

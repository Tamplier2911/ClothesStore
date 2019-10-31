import "./Slider.scss";
import React from "react";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";

const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__slide">
        <div className="slider__content">
          <h2 className="slider__header">Slide 1</h2>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim molestiae voluptate
            dolorum aspernatur unde voluptatum delectus
            necessitatibus officia?
          </p>
        </div>
        <img
          className="slider__image"
          src={img1}
          alt="wonderful clothes"
        ></img>
      </div>

      <div className="slider__slide">
        <div className="slider__content">
          <h2 className="slider__header">Slide 2</h2>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim molestiae voluptate
            dolorum aspernatur unde voluptatum delectus
            necessitatibus officia?
          </p>
        </div>
        <img
          className="slider__image"
          src={img2}
          alt="wonderful clothes"
        ></img>
      </div>

      <div className="slider__slide">
        <div className="slider__content">
          <h2 className="slider__header">Slide 3</h2>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim molestiae voluptate
            dolorum aspernatur unde voluptatum delectus
            necessitatibus officia?
          </p>
        </div>
        <img
          className="slider__image"
          src={img3}
          alt="wonderful clothes"
        ></img>
      </div>

      <div className="slider__slide">
        <div className="slider__content">
          <h2 className="slider__header">Slide 4</h2>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim molestiae voluptate
            dolorum aspernatur unde voluptatum delectus
            necessitatibus officia?
          </p>
        </div>
        <img
          className="slider__image"
          src={img4}
          alt="wonderful clothes"
        ></img>
      </div>

      <div className="slider__slide">
        <div className="slider__content">
          <h2 className="slider__header">Slide 5</h2>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim molestiae voluptate
            dolorum aspernatur unde voluptatum delectus
            necessitatibus officia?
          </p>
        </div>
        <img
          className="slider__image"
          src={img5}
          alt="wonderful clothes"
        ></img>
      </div>
    </section>
  );
};

export default Slider;

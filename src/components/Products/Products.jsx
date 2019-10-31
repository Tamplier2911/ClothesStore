import "./Products.scss";
import React from "react";

import prod_1 from "../../images/product1.png";
import prod_2 from "../../images/product2.png";
import prod_3 from "../../images/product3.png";

const Products = () => {
  return (
    <section className="products">
      <h1 className="products__heading">
        Featured Products
      </h1>
      <div className="products__wrapper">
        <div className="products__product">
          <img
            className="products__image"
            src={prod_1}
            alt="product"
          ></img>
          <div className="products__description">
            <h3 className="products__description--heading">
              Dress
            </h3>
            <p className="products__description--price">
              Price:{" "}
              <span className="products__description--amount">
                $149
              </span>
            </p>
            <a
              className="products__description--link"
              href="/"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="products__product">
          <img
            className="products__image"
            src={prod_2}
            alt="product"
          ></img>
          <div className="products__description">
            <h3 className="products__description--heading">
              Pants
            </h3>
            <p className="products__description--price">
              Price:{" "}
              <span className="products__description--amount">
                $99
              </span>
            </p>
            <a
              className="products__description--link"
              href="/"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="products__product products__helper">
          <img
            className="products__image"
            src={prod_3}
            alt="product"
          ></img>
          <div className="products__description">
            <h3 className="products__description--heading">
              Shirt
            </h3>
            <p className="products__description--price">
              Price:{" "}
              <span className="products__description--amount">
                $49
              </span>
            </p>
            <a
              className="products__description--link"
              href="/"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div className="products__linkWrapper">
        <a className="products__link" href="/">
          <div className="products__linkBackground"></div>
          <div className="products__arrow">
            <div className="products__arrow--1"></div>
            <div className="products__arrow--2"></div>
            <div className="products__arrow--3"></div>
          </div>
          <span className="products__text">See More</span>
        </a>
      </div>
    </section>
  );
};

export default Products;

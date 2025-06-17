import React from "react";
import { assets, products } from "../assets/asset";

import "./../style/product.scss";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <div className="products_page">
        <section className="hero">
          <div className="container">
            <div className="content">
              <div className="div">
                <span className="line"></span>
                <div>
                  <h3>Crafted with Precision, Designed for Impact</h3>
                  <h1>
                    We don’t just build products—we craft experiences that
                    perform.
                  </h1>
                </div>
              </div>
              <div className="div">
                <img src={assets.icons.board} alt="Kampus_Abstract_Board " />
              </div>
            </div>
          </div>
        </section>

        <section className="products__list">
          <div className="container">
            <div className="content">
              <div className="titles">
                <h1>
                  Design-led software that thinks beyond aesthetics—built to
                  solve real problems, scale purposefully, and sustain impact.
                </h1>
              </div>

              <div className="box_masonry">
                {products.map((item, index) => (
                  <div className="box_item" key={index}>
                    <div className="img">
                      <img src={item.media.coverImage} alt={item.title} />
                      <span className="industry">{item.industry}</span>
                    </div>
                    <Link to={"/"} className="item__details">
                      <h3>{item.title}</h3>
                      <div
                        className="p"
                        dangerouslySetInnerHTML={{ __html: item.overview }}
                      ></div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product__cta">
          <div className="container">
            <div className="content">
              <div className="left">
                <p>have a project in mind?</p>
                <h1>
                  Allow us to establish a lasting reputation for your business.
                </h1>
                <div>
                  <Link>
                    <span>Book a Call</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;

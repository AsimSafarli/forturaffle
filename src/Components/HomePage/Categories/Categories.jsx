import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Categories from "../../../Data/HomePage/Categories.json";
import "./Categories.css";
const Categoriess = () => {
  return (
    <section className="third__section__total">
      <div className="third__section">
        <h1>Kateqoriyalar</h1>
      </div>

      <div className="third__section__cards">
        {Categories.map((item) => (
          <div key={item.id} className="third__section__cards__card">
            <div className="third__section__cards__card__img">
              <img src={item.image} />
            </div>
            <div className="third__section__cards__card__title">
              {item.title}
            </div>

            <div className="third__section__button">
              <div className="third__section__button__des">Məhsuallara bax</div>
              <div className="third__section__button__arrow">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        ))}
        <div className="third__section__button__2">
          <div className="third__section__button__2__des">Daha çox məhsul</div>
          <div className="third__section__button__2__arrow">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categoriess;

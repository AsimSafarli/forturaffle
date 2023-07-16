import React from "react";
import { TiTicket } from "react-icons/ti";
import { SlHeart } from "react-icons/sl";
import TopMehsulCards from "../../../Data/TopMehsulCards.json";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./TopMehsul.css";
const TopMehsul = () => {
  return (
    <div>
      <section className="second__total">
        <div className="second__section">
          <h1>Top məhsullar</h1>
        </div>

        {TopMehsulCards.map((item) => (
          <div key={item.id} className="second__section__cards">
            <div className="second__section__cards__card">
              <div className="second__section__cards__card__img">
                <img src="Assets/home/airpod.jpg" />
              </div>
              <div className="second__section__cards__card__title">
                {item.title}
              </div>
              <div className="second__section__cards__card__price ">
                <div className="second__section__cards__card__price__ticket ">
                  <TiTicket />
                </div>
                <div className="second__section__cards__card__pricee ">
                  {item.price}
                </div>
              </div>
              <div className="second__section__cards__card__percentage">
                <div className="second__section__cards__card__percentage__bar">
                  <progress
                    className="percentage__bar"
                    id="file"
                    value={item.percentageBarValue}
                    max={item.percentageBarMax}
                  ></progress>
                </div>
                <div className="second__section__cards__card__percentage__number">
                  {item.percentageNumber}%
                </div>
              </div>

              <div className="second__section__cards__card__button">
                <div className="second__section__cards__card__button__1">
                  <div className="second__section__cards__card__button__1__heart">
                    <SlHeart />
                  </div>
                </div>
                <div className="second__section__cards__card__button__2">
                  <button>Səbətə əlavə et</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="second__section__button">
          <div className="second__section__button__des">Daha çox məhsul</div>
          <div className="second__section__button__arrow">
            <AiOutlineArrowRight />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopMehsul;

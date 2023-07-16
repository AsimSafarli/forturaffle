import React from "react";
import LatestWinner from "../../../Data/HomePage/LatestWinners.json";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./LatestWinners.css";
const LatestWinners = () => {
  return (
    <section className="fourth__section">
      <div className="fourth__section__boxs">
        <h1> Ən son qazananlar</h1>
        <div className="fourth__section__cards">
          {LatestWinner.map((item) => (
            <div key={item.id} className="fourth__section__cards__card">
              <div className="fourth__section__cards__card__left">
                <img src="Assets/home/airpod.jpg" />
              </div>
              <div className="fourth__section__cards__card__right">
                <div className="fourth__section__cards__card__right__des">
                  <h2>{item.title} </h2>
                  <p>
                    Məhsulun dəyəri: <span>{item.value}AZN</span>
                  </p>
                  <p>
                    Qazanan:<span>{item.winner}</span>
                  </p>
                  <p>
                    Tarix:<span>{item.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="third__section__button__2">
        <div className="third__section__button__2__des">Daha çox məhsul</div>
        <div className="third__section__button__2__arrow">
          <AiOutlineArrowRight />
        </div>
      </div>
    </section>
  );
};

export default LatestWinners;

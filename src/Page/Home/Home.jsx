import React from "react";
import { TiTicket } from "react-icons/ti";
import { SlHeart } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./Home.css";

function Home() {
  return (
    <div className="total">
      <section className="first__section">
        <div className="first__section__left">
          <div className="first__section__left__title">
            <h1>Şansınızı yoxlayın!</h1>
          </div>
          <div className="first__section__left__decription">
            <div className="first__section__left__decription__left">
              <h6>500+</h6>
              <p>Müştəri</p>
            </div>

            <div className="first__section__left__decription__right">
              <h6>1000+</h6>
              <p>Məhsul</p>
            </div>
          </div>
          <div className="first__section__left__button">
            <button>
              Bileti al
            </button>
          </div>
        </div>

        <div className="first__section__right">
          <img src="Assets/Home/Shop giveaway-pana 1.png" />
        </div>
      </section>

      <section>
        <div className="second__section">
          <h1>Top məhsullar</h1>
        </div>
        <div className="second__section__cards">
          <div className="second__section__cards__card">
            <div className="second__section__cards__card__img">
              <img src="Assets/home/airpod.jpg" />
            </div>
            <div className="second__section__cards__card__title">
              AirPods Pro 2nd gen
            </div>
            <div className="second__section__cards__card__price ">
              <div className="second__section__cards__card__price__ticket ">
                <TiTicket />
              </div>
              <div className="second__section__cards__card__pricee ">5 AZN</div>
            </div>
            <div className="second__section__cards__card__percentage">
              <div className="second__section__cards__card__percentage__bar">
                <progress
                  className="percentage__bar"
                  id="file"
                  value="50"
                  max="100"
                ></progress>
              </div>
              <div className="second__section__cards__card__percentage__number">
                50%
              </div>
            </div>

            <div className="second__section__cards__card__button">
              <div className="second__section__cards__card__button__1">
                <SlHeart />
              </div>
              <div className="second__section__cards__card__button__2">
                <button>Səbətə əlavə et</button>
              </div>
            </div>
          </div>

          <div className="second__section__cards__card">
          <div className="second__section__cards__card__img">
            <img src="Assets/home/airpod.jpg" />
          </div>
          <div className="second__section__cards__card__title">
            AirPods Pro 2nd gen
          </div>
          <div className="second__section__cards__card__price ">
            <div className="second__section__cards__card__price__ticket ">
            <TiTicket />
            </div>
            <div className="second__section__cards__card__pricee ">5 AZN</div>
          </div>
          <div className="second__section__cards__card__percentage">
            <div className="second__section__cards__card__percentage__bar">
              <progress
                className="percentage__bar"
                id="file"
                value="50"
                max="100"
              ></progress>
            </div>
            <div className="second__section__cards__card__percentage__number">
              50%
            </div>
          </div>

          <div className="second__section__cards__card__button">
            <div className="second__section__cards__card__button__1">
              <SlHeart />
            </div>
            <div className="second__section__cards__card__button__2">
              <button>Səbətə əlavə et</button>
            </div>
          </div>
        </div>


        <div className="second__section__cards__card">
        <div className="second__section__cards__card__img">
          <img src="Assets/home/airpod.jpg" />
        </div>
        <div className="second__section__cards__card__title">
          AirPods Pro 2nd gen
        </div>
        <div className="second__section__cards__card__price ">
          <div className="second__section__cards__card__price__ticket ">
            <TiTicket />
          </div>
          <div className="second__section__cards__card__pricee ">5 AZN</div>
        </div>
        <div className="second__section__cards__card__percentage">
          <div className="second__section__cards__card__percentage__bar">
            <progress
              className="percentage__bar"
              id="file"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="second__section__cards__card__percentage__number">
            50%
          </div>
        </div>

        <div className="second__section__cards__card__button">
          <div className="second__section__cards__card__button__1">
            <SlHeart />
          </div>
          <div className="second__section__cards__card__button__2">
            <button>Səbətə əlavə et</button>
          </div>
        </div>
      </div>


      <div className="second__section__cards__card">
      <div className="second__section__cards__card__img">
        <img src="Assets/home/airpod.jpg" />
      </div>
      <div className="second__section__cards__card__title">
        AirPods Pro 2nd gen
      </div>
      <div className="second__section__cards__card__price ">
        <div className="second__section__cards__card__price__ticket ">
          <TiTicket />
        </div>
        <div className="second__section__cards__card__pricee ">5 AZN</div>
      </div>
      <div className="second__section__cards__card__percentage">
        <div className="second__section__cards__card__percentage__bar">
          <progress
            className="percentage__bar"
            id="file"
            value="50"
            max="100"
          ></progress>
        </div>
        <div className="second__section__cards__card__percentage__number">
          50%
        </div>
      </div>

      <div className="second__section__cards__card__button">
        <div className="second__section__cards__card__button__1">
          <SlHeart />
        </div>
        <div className="second__section__cards__card__button__2">
          <button>Səbətə əlavə et</button>
        </div>
      </div>
    </div>


        </div>
        <div className="second__section__button">
        <div className="second__section__button__des">
        Daha çox məhsul
        </div>
        <div className="second__section__button__arrow">
        <AiOutlineArrowRight/></div>
        </div>
      </section>
    </div>
  );
}

export default Home;

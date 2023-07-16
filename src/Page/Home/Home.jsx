import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import SansYoxla from "../../Components/HomePage/SansYoxla/SansYoxla";
import TopMehsul from "../../Components/HomePage/TopMehsul/TopMehsul";

function Home() {
  return (
    <div className="total">
      <SansYoxla/>
<TopMehsul/>
            <section>
        <div className="third__section">
          <h1>Kateqoriyalar</h1>
        </div>
        <div className="third__section__cards">
          <div className="third__section__cards__card">
            <div className="third__section__cards__card__img">
              <img src="Assets/home/airpod.jpg" />
            </div>
            <div className="third__section__cards__card__title">
              Qulaqcıqlar
            </div>

            <div className="third__section__button">
              <div className="third__section__button__des">Məhsuallara bax</div>
              <div className="third__section__button__arrow">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>

          <div className="third__section__cards__card">
            <div className="third__section__cards__card__img">
              <img src="Assets/home/airpod.jpg" />
            </div>
            <div className="third__section__cards__card__title">
              Qulaqcıqlar
            </div>

            <div className="third__section__button">
              <div className="third__section__button__des">Məhsuallara bax</div>
              <div className="third__section__button__arrow">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>

          <div className="third__section__cards__card">
            <div className="third__section__cards__card__img">
              <img src="Assets/home/airpod.jpg" />
            </div>
            <div className="third__section__cards__card__title">
              Qulaqcıqlar
            </div>

            <div className="third__section__button">
              <div className="third__section__button__des">Məhsuallara bax</div>
              <div className="third__section__button__arrow">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="third__section__button__2">
        <div className="third__section__button__2__des">Daha çox məhsul</div>
        <div className="third__section__button__2__arrow">
          <AiOutlineArrowRight />
        </div>
      </div>

      <section>
        <div className="fourth__section">
          <div className="fourth__section__left">
            <h1>Bizdən xəbərdar olun</h1>
            <p>
              E-mail vasitəsilə abunə olaraq ən son yeniliklərdən ilk siz
              xəbərdar ola bilərsiniz!
            </p>
            <div className="fourth__section__left__emailBox">
              <div className="fourth__section__left__emailBox__input">
                <input
                  type="text"
                  placeholder="E-mailinizi daxil edə bilərsiniz"
                ></input>
              </div>
              <div className="fourth__section__left__emailBox__button">
                <div className="third__section__left__emailBox__des">
                  Göndər
                </div>
                <div className="third__section__left__emailBox__arrow">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="fourth__section__right">
            <img src="Assets/Home/Newsletter.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import '../components/PokedexPage/styles/HomePage.css'

const HomePage = () => {
  const trainer = useSelector((reducer) => reducer.trainer);

  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerG(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <article className="hp">
      <h1 className="hp__container__img">
        <img className="hp__image" src="/imgs/img2.png" alt="" />  
      </h1>
      <div className="hp__container__title">
        <h2 className="hp__greeting__title">Hi trainer!!</h2>
        <p className="hp__paragraph">
          To start with the app, give me your name trainer 😁
        </p>
      <form className="hp__content" onSubmit={handleSubmit}>
        <input className="hp__input" id="inputTrainer" ref={inputTrainer} type="text" />
        <button className="hp__button">Gotta catch em all!</button>
      </form>
      </div>
      <div>
        <img className="hp__image__footer" src="/imgs/img3.png" alt="" />
      </div>
    </article>
  );
};

export default HomePage;

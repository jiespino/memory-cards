import React, { useState, useEffect, useRef } from "react";
import kidGoku from './dbzImages/kidGoku.jpg'
import kidBuu from './dbzImages/kidBuu.png'
import gohanSS2 from './dbzImages/gohanSS2.jpg'
import Vegeta from './dbzImages/vegeta.jpg'
import Pan from './dbzImages/pan.png'
import Goku from './dbzImages/Goku.jpg'
import Piccolo from './dbzImages/Piccolo.jpg'
import Krillin from './dbzImages/Krillin.jpg'
import Android18 from './dbzImages/Android18.jpg'
import Trunks from './dbzImages/Trunks.png'
import Bulma from './dbzImages/Bulma.png'
import ChiChi from './dbzImages/ChiChi.jpg'


import uniqid from "uniqid";

import './MemoryCards.css'

const MemoryCards = () => {
  let kidGokuId = uniqid()
  let kidBuuId = uniqid()
  let gohanSS2Id = uniqid()
  let VegetaId = uniqid()
  let PanId = uniqid()
  let GokuId = uniqid()
  let PiccoloId = uniqid()
  let KrillinId = uniqid()
  let Android18Id = uniqid()
  let TrunksId = uniqid()
  let BulmaId = uniqid()
  let ChiChiId = uniqid()



  const [cards, setCards] = useState([

    <img id={kidGokuId} key={kidGokuId} onClick={checkCard} className='card' alt="Kid Goku" src={kidGoku}></img>,
    <img id={kidBuuId} key={kidBuuId} onClick={checkCard} className='card' alt="Kid Buu" src={kidBuu}></img>,
    <img id={gohanSS2Id} key={gohanSS2Id} onClick={checkCard} className='card' alt="Gohan Super Saiyan 2" src={gohanSS2}></img>,
    <img id={VegetaId} key={VegetaId} onClick={checkCard} className='card' alt="Vegeta" src={Vegeta}></img>,
    <img id={PanId} key={PanId} onClick={checkCard} className='card' alt="Pan" src={Pan}></img>,
    <img id={GokuId} key={GokuId} onClick={checkCard} className='card' alt="Goku" src={Goku}></img>,
    <img id={PiccoloId} key={PiccoloId} onClick={checkCard} className='card' alt="Piccolo" src={Piccolo}></img>,
    <img id={KrillinId} key={KrillinId} onClick={checkCard} className='card' alt="Krilling" src={Krillin}></img>,
    <img id={Android18Id} key={Android18Id} onClick={checkCard} className='card' alt="Android 18" src={Android18}></img>,
    <img id={TrunksId} key={TrunksId} onClick={checkCard} className='card' alt="Trunks" src={Trunks}></img>,
    <img id={BulmaId} key={BulmaId} onClick={checkCard} className='card' alt="Bulma" src={Bulma}></img>,
    <img id={ChiChiId} key={ChiChiId} onClick={checkCard} className='card' alt="Chi-Chi" src={ChiChi}></img>

  ]);

  // Let me get current value of chosenCards state
  // while not in useEffect()
  const [chosenCards, setChosenCards] = useState([])
  const chosenCardsRef = useRef()
  chosenCardsRef.current = chosenCards

  // set score/high score 
  const [score, setScore] = useState(0);
  const scoreRef = useRef()
  scoreRef.current = score

  const [highScore, setHighScore] = useState(0);
  const highScoreRef = useRef()
  highScoreRef.current = highScore

  useEffect(() => {
  }, [chosenCards]);


  function checkCard(e) {
    let gameContinue = true;
    let currCardId = e.target.id;
    let chosenCardId;
    for (let card of chosenCardsRef.current.entries()) {
      chosenCardId = card[1].id
        // End current game if card already chosen
        if (currCardId === chosenCardId) {
          gameContinue = false;
          resetCards();
          updateHighScore();
          setScore(0)
          break;
        }
    }
    // If same card not chosen then continue game
    if (gameContinue) {
      setChosenCards((prev) => [...prev, e.target])
      shuffleCards()
      setScore(scoreRef.current + 1)
    }
  }

  function updateHighScore() {

    if (scoreRef.current > highScoreRef.current) {
      setHighScore(scoreRef.current);
    }

  }

  function shuffleCards() {
    // Randomize cards in Cards state
    let array = [...cards]
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setCards(array)
  }

  // Set cards to initial state
  function resetCards() {
    setCards(cards)
    setChosenCards([])
  }

  
  return (
    <div id="gameContainer">
      <h1 id="title">Dragon Ball Z Memory Cards</h1>
      <div id="cardContainer">
        {cards}
      </div>
      <div id="scoreBoard">
        <p>Score: {score}</p>
        <p>Best Score: {highScore}</p>
      </div>
    </div>
  );
};

export default MemoryCards;
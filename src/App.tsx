import './App.css';
import { useState } from 'react';
import axios from 'axios';
import desktopDiv from './assets/images/pattern-divider-desktop.svg';
import mobileDiv from './assets/images/pattern-divider-mobile.svg';
import dice from './assets/images/icon-dice.svg';

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [advice, setAdvice] = useState<AdviceData>();

  async function loadAdvice() {
    try {
      const res = await axios.get<AdviceData>(
        'https://api.adviceslip.com/advice'
      );
      setAdvice(res.data);
    } catch {
      alert('Unable to fetch data');
    }
  }

  return (
    <>
      <div className="adviceContainer">
        <img
          src={desktopDiv}
          alt="desktop-divider"
          className="desktopDivider"
        />
        <img src={mobileDiv} alt="mobile-divider" className="mobileDivider" />
        <button className="diceBtn" onClick={loadAdvice}>
          <img src={dice} alt="dice-icon" className="diceIcon" />
        </button>
        {advice ? (
          <>
            <p className="adviceTitle">Advice #{advice.slip.id}</p>
            <p className="adviceText">"{advice.slip.advice}"</p>
          </>
        ) : (
          <p className="loadText">
            Click below to get an <span>Advice</span>
          </p>
        )}
      </div>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io/profile/SubagaS" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/SubagaS">
          Subaga Sreepathy{' '}
        </a>
        .
      </div>
    </>
  );
}

export default App;

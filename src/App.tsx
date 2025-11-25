import './App.css';
import { useState } from 'react';
import axios from 'axios';

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [advice, setAdvice] = useState<AdviceData | null>(null);

  async function loadAdvice() {
    const res = await axios.get<AdviceData>(
      'https://api.adviceslip.com/advice'
    );
    setAdvice(res.data);
  }

  return (
    <div className="adviceContainer">
      <img
        src="/src/assets/images/pattern-divider-desktop.svg"
        alt="desktop-divider"
        className="desktopDivider"
      />
      <img
        src="/src/assets/images/pattern-divider-mobile.svg"
        alt="mobile-divider"
        className="mobileDivider"
      />
      <button className="diceBtn" onClick={loadAdvice}>
        <img
          src="/src/assets/images/icon-dice.svg"
          alt="dice-icon"
          className="diceIcon"
        />
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
  );
}

export default App;

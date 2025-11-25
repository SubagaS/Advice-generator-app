import './App.css';

function App() {
  return (
    <div className="adviceContainer">
      <p className="adviceTitle">Advice # </p>
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
      <button>
        <img
          src="/src/assets/images/icon-dice.svg"
          alt="dice-icon"
          className="diceIcon"
        />
      </button>
    </div>
  );
}

export default App;

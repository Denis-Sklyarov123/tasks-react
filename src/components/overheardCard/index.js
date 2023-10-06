import styles from "./style.module.css";

function OverheardCard() {
  return (
    <header className="App-header">
      <div className="ImageContainer"></div>
      <div className="Information">
        <div className="Name">
          <span className="Text">The Montcalm At Brewery London City</span>
        </div>
        <div className="City">Westminster Borough, London</div>
        <div className="Grade">
          <div className="Assessment">4.7</div>
          <div className="Quality">Exceptional</div>
          <div className="QuantityReviews">3014 reviews</div>
        </div>
        <div className="StartingPrice">
          Starting from <span className="Price">US$68</span>
        </div>
      </div>
    </header>
  );
}

export default OverheardCard;

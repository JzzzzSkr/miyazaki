import "./Quotes.scss";

const Quotes = () => {
  return (
    <div className="quotesWrapper">
      <h3 className="subtitle">Quotes</h3>
      <div className="quotesBox">
        <div className="left">
          <img src="./assets/YL1.png" alt="" />
        </div>
        <div className="right">
          <ul>
            <li>
              <p className="card-text">
                Even as the gale arises, one should never give up on life. When
                the winds rise and the clouds surge, strive with all your might
                to survive.
              </p>
              <div className="author">
                <span>-- "The Wind Rises"</span>
              </div>
            </li>
            <li>
              <p className="card-text">
                Growth is a transaction, where we trade our simple childhood
                innocence and unblemished naivety for the courage to grow up.
              </p>
              <div className="author">
                <span>-- "Kiki's Delivery Service"</span>
              </div>
            </li>
            <li>
              <p className="card-text">
                Life is like a train journey to the grave, with many stops along
                the way. It's rare for someone to accompany you from start to
                finish. When the time comes for your companions to disembark,
                even if it's hard to let go, you should be grateful and then
                wave goodbye.
              </p>
              <div className="author">
                <span>-- "Spirited Away"</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

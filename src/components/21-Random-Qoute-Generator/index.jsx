import React, { useEffect, useState } from "react";
import "./quote.css";

const RandomQuoteGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);

  async function fetchQuote() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/quotes/random", {
        method: "GET",
      });
      const result = await apiResponse.json();

      // console.log(result);
      setLoading(false);
      setQuote(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }

  return (
    <>
      <h1 className="m-t">21. Random Quote Generator</h1>
      <div className="random-quote-generator">
        <div className="quote-wrapper">
          <p>{`" ${quote?.quote} "`}</p>
          <p className="author">{` - ${quote?.author}`}</p>
        </div>
        <button className="refesh-btn" onClick={handleRefresh}>refresh</button>
      </div>
    </>
  );
};

export default RandomQuoteGenerator;

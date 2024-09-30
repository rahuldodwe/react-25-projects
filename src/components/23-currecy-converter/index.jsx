import React, { useEffect, useState } from "react";
import './currency.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFrormCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  async function fetchExchangeRaete() {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      { method: "GET" }
    );

    const result = await apiResponse.json();
    const calculatedRate = result?.rates[toCurrency];
    setExchangeRate(calculatedRate);

    setConvertedAmount((amount * calculatedRate).toFixed(2));
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleFromCurrencyChange(event) {
    setFrormCurrency(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }

  useEffect(() => {
    fetchExchangeRaete();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <>
      <h1 className="m-t">23. Currency Converter </h1>
      <div className="currency-converter">
        <div className="input-container">
          <input
            value={amount}
            onChange={handleAmountChange}
            type="amont"
            name="fromcurrency"
            placeholder="Enter Amout"
          />
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            name=""
            id=""
          >
            <option value={"EUR"}>EUR</option>
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>
          </select>
        </div>
        <p className="to">To</p>
        <div className="input-container">
          <input type="text" value={convertedAmount} readOnly />
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            name=""
            id=""
          >
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>
            <option value={"EUR"}>EUR</option>
          </select>
        </div>
        <p className="exchange-rate">Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency} </p>
      </div>
    </>
  );
};

export default CurrencyConverter;

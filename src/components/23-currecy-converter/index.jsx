import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFrormCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleFromCurrencyChange(event) {
    setFrormCurrency(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setFrormCurrency(event.target.value);
  }

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
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>
            <option value={"EUR"}>EUR</option>
          </select>
        </div>
        <p>To</p>
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
      </div>
    </>
  );
};

export default CurrencyConverter;

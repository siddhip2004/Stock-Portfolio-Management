import React, { useState } from "react";

const CompanyDetails = () => {
  const [symbol, setSymbol] = useState("");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ApiKey = process.env.REACT_APP_FINANCIAL_MODELING_API_KEY;
//   const finnhub = require('finnhub');

//   const api_key = finnhub.ApiClient.instance.authentications['api_key'];
//   api_key.apiKey = "cmqvv7hr01ql2lmt95u0cmqvv7hr01ql2lmt95ug"
//   const finnhubClient = new finnhub.DefaultApi()

// finnhubClient.quote("AAPL", (error, data, response) => {
//   console.log(data)
// });
// console.log(process.env.REACT_APP_FINANCIAL_MODELING_API_KEY);
// console.log(ApiKey);

  const fetchCompanyDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log(process.env.REACT_APP_FINANCIAL_MODELING_API_KEY);
      console.log(ApiKey);
      const response = await fetch(
        // `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${ApiKey}`
        `https://financialmodelingprep.com/stable/financial-scores?symbol=${symbol}&apikey=${ApiKey}`
        // "https://financialmodelingprep.com/stable/financial-scores?symbol=AAPL&apikey=OfWkW6me85Ix6iPN2IpXXpZypva6P6ja"
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setCompanyDetails(data[0]);
      } else {
        setCompanyDetails(null);
        setError("Company not found");
      }
    } catch (error) {
      console.error("Error fetching company details:", error);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCompanyDetails();
  };

  return (
    <div className="explore-page">
      <div className="getinput">
        <h2> Instantly Discover the Share/Stock Price at Your Fingertips</h2>
        <h3>Provide the Company Details</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Company Symbol:
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
          </label>
          <button type="submit" disabled={loading}>
            Get Details
          </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {companyDetails && (
          <div className="data">
            <h3>{companyDetails.symbol}</h3>
            <div className="column1">
              <p>Symbol : </p>
              <p>Currency : </p>
              <p>Altman Z-Score : </p>
              <p>Piotroski Score : </p>
              <p>Working Capital : </p>
              <p>Total Assets : </p>
              <p>Retained Earnings : </p>
              <p>EBIT : </p>
              <p>Market Cap : </p>
              <p>Total Liabilities : </p>
              <p>Revenue : </p>
            </div>

            <div className="column2">
              <p>{companyDetails.symbol}</p>
              <p>{companyDetails.reportedCurrency}</p>
              <p>{companyDetails.altmanZScore?.toFixed(2)}</p>
              <p>{companyDetails.piotroskiScore}</p>
              <p>{companyDetails.workingCapital?.toLocaleString()}</p>
              <p>{companyDetails.totalAssets?.toLocaleString()}</p>
              <p>{companyDetails.retainedEarnings?.toLocaleString()}</p>
              <p>{companyDetails.ebit?.toLocaleString()}</p>
              <p>{companyDetails.marketCap?.toLocaleString()}</p>
              <p>{companyDetails.totalLiabilities?.toLocaleString()}</p>
              <p>{companyDetails.revenue?.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDetails;

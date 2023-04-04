const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const symbolInput = document.querySelector('#symbol');
    const symbol = symbolInput.value;

    if (!symbol) {
      return;
    }

    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=TBLZYU5K4W5A8RMZ`);

      const data = await response.json();
      const globalQuoteData = data['Global Quote'];
      const symbol = globalQuoteData['01. symbol'];
      const price = parseFloat(globalQuoteData['05. price']);
      const change = parseFloat(globalQuoteData['09. change']);
      const changePercent = parseFloat(globalQuoteData['10. change percent']);
      const volume = globalQuoteData['06. volume'];
      displayResults(symbol, price, change, changePercent, volume);
    } catch (error) {
      console.error(error);
      resultsContainer.innerHTML = '<p>An error occurred while fetching the data.</p>';
    }
  });
}

function displayResults(symbol, price, change, changePercent, volume) {
  resultsContainer.innerHTML = `
    <h2>Results for ${symbol}</h2>
    <p>Price: ${price.toFixed(2)}</p>
    <p>Change: ${change.toFixed(2)}</p>
    <p>Change Percent: ${changePercent.toFixed(2)}%</p>
    <p>Volume: ${volume}</p>
  `;
}

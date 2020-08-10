/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `getRandomQuote` function
 *  1) Generate a random number between 0 and # of quotes
 *  2) Use the random number and box notation to grab a random item from the ​quotes array
 *  3) Return the random item
 ***/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
 *  1) Generate Random Quote
 *  2) Create HTML for the quote
 *  3) Replace Current Quote
 ***/
const printQuote = () => {
  const randomQuote = getRandomQuote();

  let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

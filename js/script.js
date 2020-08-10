/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `randomNumber` function
 *  Generates a random number between 0 and the number passed in
 *  @param {integer} highNumber - the highest # to generate
 *  @return {integer} random number
 ***/
const randomNumber = (highNumber) => Math.floor(Math.random() * (highNumber + 1));

/***
 * `randomRGB` function
 *  Generates a random RGB Color Value
 *  @return {string} random RGB color
 ***/
const randomRGB = () => `rgb( ${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)} )`;

/***
 * `getRandomQuote` function
 *  1) Generate a random number between 0 and # of quotes
 *  2) Use the random number and box notation to grab a random item from the ​quotes array
 *  3) Return the random item
 *  @return {object} quote object
 ***/
const getRandomQuote = () => quotes[randomNumber(quotes.length - 1)];

/***
 * `printQuote` function
 *  1) Generate Random Quote
 *  2) Create HTML for the quote
 *  3) Replace Current Quote
 *  4) Change background color
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
  if (randomQuote.category) {
    html += `<span class="category"> ${randomQuote.category} </span>`;
  }
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = randomRGB();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Set printQuote to run every 20 seconds
setInterval(printQuote, 20000);

/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Life is about making an impact, not making an income',
    source: 'Kevin Kruse',
    citation: 'Twitter',
    year: '2015'
  },
  {
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that's why I succeed.",
    source: 'Michael Jordan',
    citation: 'Nike Commercial',
    year: '1997',
    tag: 'sports'
  },
  {
    quote: 'Every strike brings me closer to the next home run.',
    source: 'Babe Ruth',
    tag: 'sports'
  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    source: 'Amelia Earhart',
  },
  {
    quote: 'It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.',
    source: 'Steve McConnell',
    tag: 'programming'
  },
  {
    quote: 'Everybody in this country should learn to program a computer because it teaches you how to think.',
    source: 'Steve Jobs'
  }
];



/***
 * `getRandomQuote` function
***/
// getRandomQuote creates a random number and uses that number to select a quote from the quotes array
const getRandomQuote = (arr) => {
  //create random number between 0 and the array length
  let randomNumber = Math.floor(Math.random() * (arr.length));
  return arr[randomNumber];
}

/***
 * `printQuote` function
***/
// printQuote grabs a random quote from the quotes array and displays it in the HTML
const printQuote = () => {
  const quote = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;

  if (quote.hasOwnProperty('citation')) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if (quote.hasOwnProperty('year')) {
    html += `<span class="year">${quote.year}</span>`;
  }

  if (quote.hasOwnProperty('tag')) {
    html += `<span class="tag">${quote.tag}</span>`;
  }

  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

// random background color thanks to CSS Tricks https://css-tricks.com/snippets/javascript/random-hex-color/
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

setInterval(printQuote, 10000);
setInterval(setBg, 10000);

/***
 * click event listener for the print quote button
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);
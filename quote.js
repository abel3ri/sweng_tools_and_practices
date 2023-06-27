const newQuoteBtn = document.querySelector(".quote-btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quotes = [
  {
    author: `Mikiyas`,
    quote: `“True terror is to wake up one morning and discover that your high school class is running the country.”`,
  },
  {
    author: `Abel`,
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
  },
  {
    author: `Fike`,
    quote: `“If you can’t be kind, at least be vague.”`,
  },
  {
    author: `Samuel`,
    quote: ` “Doing nothing is very hard to do. You never know when you’re finished.”`,
  },
  {
    author: `Muse`,
    quote: `“When in doubt, look intelligent.”`,
  },
];

newQuoteBtn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[randomNum].quote;
  author.textContent = quotes[randomNum].author;
});

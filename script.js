const quotes = [
    {
        name: 'Mark Twain',
        quote: 'Principles have no real value except when one is well-fed.'
    },
    {
        name: 'Elbert Hubbard',
        quote: 'Do not take life too seriously. You will never get out of it alive.'
    },
    {
        name: 'E.B. White',
        quote: 'Prejudice is a great time save. You can form opinions without having to get the facts.'
    },
    {
        name: 'Mitch Hedberg',
        quote: 'My fake plants died because I did not pretend to water them.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}


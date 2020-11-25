import React from 'react';
import Data from './Data';
import { useState } from 'react';


const Quote = () => {

    const [author, setAuthor] = useState("author");
    const [quote, setQuote] = useState("quote");

    return (
        <article className="quote">
            <h2 id="text">{quote}</h2>
            <h3 id="author">{author}</h3>
            <button onClick={this.handleState} id="new-quote">Get a New Quote!</button>
            <a target="_blank" href="twitter.com/intent/tweet" id="tweet-quote">Tweet it!</a>
        </article>
    );
}

export default Quote;
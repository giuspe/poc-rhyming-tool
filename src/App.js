import { generate } from "random-words";
import { syllable } from 'https://esm.sh/syllable@5'

import React from 'react';
import './App.css';

import List from './Components/List/List';
import TextFilter from './Components/TextFilter/TextFilter';

const numberOfWords = 5000;
const generateWords = () => {
  console.log(`generating ${numberOfWords} words`);
  return generate(
    { exactly: numberOfWords, minLength: 4, maxLength: 30 }
  ).filter((value, index, array) => {
    return array.indexOf(value) === index;
  }).sort();
};

function App() {
  const [listElements, setListElements] = React.useState([]);
  const refreshWords = () => {
    setListElements(generateWords());
    setRhymeWord(rhymeWord);
  };
  const [filter, setFilter] = React.useState("");
  const updateFilter = (event) => {
    setFilter(event.target.value);
  }
  const [rhymeWord, setRhymeWord] = React.useState("");
  const [endsWith, setEndsWith] = React.useState("");
  const updateEndsWith = (event) => {
    console.log(event.target.innerText);
    setRhymeWord(event.target.innerText);
    let ends = event.target.innerText.length > 3 ? event.target.innerText.substring(event.target.innerText.length - 3) : event.target.innerText; 
    setEndsWith(ends);
  }
  const resetEndsWith = (event) => {
    console.log("resetting endsWith");
    setRhymeWord("");
    setEndsWith("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactiveRhymes</h1>
        <div>number of words: {numberOfWords}</div>
        <TextFilter 
          onChange={updateFilter}
          resetEndsWith={resetEndsWith}
        />
        <br />
        <span>{endsWith.length > 0 ? `rhymes with: ${rhymeWord} (-${endsWith}, ${syllable(rhymeWord)} syllables)` : ''}</span>
        {endsWith.length > 0 ? <div><button onClick={resetEndsWith}>reset rhyme</button></div> : ''}
        <button onClick={refreshWords}>refresh wordlist</button>
        <List
          onClick={updateEndsWith}
          elements={
            listElements.filter((el) => {
              const syllables = syllable(el);
              return (
                endsWith.length === 0 ? 
                  el.includes(filter) : 
                  el.endsWith(endsWith) && (rhymeWord.length === 0 || syllables === syllable(rhymeWord))
              );
            }
          )
          } />
      </header>
    </div>
  );
}

export default App;

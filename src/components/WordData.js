import React from 'react';
import Definitions from './Definitions';
import Synonyms from './Synonyms';
import Antonyms from './Antonyms';
import './worddata.css';

const WordData = ({data,barrons}) => {

    // Get Definitions => data .meanings(array) => each item contains 1 definition
  return (
      <div className='word-data-container'>
          <h1>Definitions</h1>
          <Definitions definitions={data[0].meanings[0].definitions} />
          <h1>Synonyms</h1>
          <Synonyms synonyms={data[0].meanings[0].synonyms} />
          <h1>Antonyms</h1>
          <Antonyms antonyms={data[0].meanings[0].antonyms} />
          {barrons==="Yes"?<div><h2 className='found'>High Freq word ✅✅</h2></div> : <div><h2 className='notFound'>Not High Freq ❌❌</h2></div>}
      </div>
  )
}

export default WordData
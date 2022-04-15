import React from 'react';
import Select from 'react-select';
import wordList from '../constants/words';

const WordInput = ({word,setWord}) => {

  const handleOnChange = (e)=>{
    console.log(e);
    setWord(e.value);
  }

  return (
    <div>
        <Select
            placeholder="Type Word..."
            defaultValue = {word}
            onChange={(e)=>handleOnChange(e)}
            options={wordList}
        ></Select>
    </div>
  )
}

export default WordInput
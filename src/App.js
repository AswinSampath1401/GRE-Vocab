import { useEffect, useState } from 'react';
import './App.css';
import GreVocabHeader from './components/Header/GreVocabHeader';
import WordInput from './components/WordInput';
// import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordData from './components/WordData';

function App() {
  const [word,setWord] = useState('');
  const [data,setData] = useState('');

  useEffect(()=>{
    const fetchData = async ()=>{
      await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      ).then(response => response.json())
      .then((result)=>{
        console.log(result);
        setData(result);
      },(error)=>{
        console.log(error);
      })
    }
    fetchData();
  },[word])
    
  return (
    data?(
    <div>
      <GreVocabHeader />
      <WordInput setWord={setWord} />
      <div>
        <WordData data={data}/>
        {/* <JSONPretty data={data}></JSONPretty> */}
      </div>
    </div>
    ):(
      <div>
        <GreVocabHeader />
        <WordInput setWord={setWord} />
      </div>
    )
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import GreVocabHeader from './components/Header/GreVocabHeader';
import WordInput from './components/WordInput';
// import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordData from './components/WordData';
import BarronsWordList from './data/barrons.json';

function App() {
  const [word,setWord] = useState('');
  const [data,setData] = useState('');
  const [barrons,setBarrons] = useState("No");

  useEffect(()=>{
    const fetchData = async ()=>{
      setBarrons("No");
      await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      ).then(response => response.json())
      .then((result)=>{
        console.log(result);
        setData(result);
      },(error)=>{
        console.log(error);
      })

      for(let index in BarronsWordList){
        if(BarronsWordList[index]===word){
          console.log("----------------------- Found match ----------------");
          setBarrons("Yes");
        }
        else{
          console.log("Word not match", BarronsWordList[index] ," ", word)
        }
      }
    }
    fetchData();
  },[word])
    
  return (
    data?(
    <div>
      <GreVocabHeader />
      <WordInput setWord={setWord} />
      <div>
        <WordData data={data} barrons={barrons} />
        {/* <JSONPretty data={data}></JSONPretty> */}
        {barrons}
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

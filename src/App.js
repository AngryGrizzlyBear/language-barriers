import React, { useState } from 'react';
import './index.css'
import UserTable from './Components/UserTable'


const App = () => {

  const wordData= [
    {id: 1, word:'はい', translation:'yes'},
    {id: 2, word:'わたし', translation:'I'},
    {id: 3, word:'あなた', translation:'You'},
  ]

  const [words, setWords] = useState(wordData)


  
  return (
    <div className="container">
      <h1>Language Barriers</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Word</h2>
        </div>
        <div className="flex-large">
          <h2>Translation</h2>
          <UserTable words={words} />
        </div>
      </div>
    </div>
    )
}

export default App;

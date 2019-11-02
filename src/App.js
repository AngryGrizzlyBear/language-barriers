import React, { useState } from "react";
import "./index.css";
import UserTable from "./Components/UserTable";
import AddWordForm from "./Components/AddWordForm";

const App = () => {
  const wordData = [
    { id: 1, word: "はい", translation: "yes" },
    { id: 2, word: "わたし", translation: "I" },
    { id: 3, word: "あなた", translation: "You" }
  ];

  const [words, setWords] = useState(wordData);

  const addWord = word => {
    word.id = words.length + 1;
    setWords([...words, word]);
  };

  return (
    <div className="container">
      <h1>Language Barriers</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Word</h2>
          <AddWordForm addWord={addWord} />
        </div>
        <div className="flex-large">
          <h2>Translation</h2>
          <UserTable words={words} />
        </div>
      </div>
    </div>
  );
};

export default App;

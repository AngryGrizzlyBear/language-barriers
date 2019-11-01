import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { word: "", translation: "" };
  const [word, setWord] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setWord({ ...word, [name]: value });
  };

  const submitWord = event => {
    event.preventDefault();
    if (!word.word || !word.translation) return;

    props.addWord(word);
    setWord(initialFormState);
  };

  return (
    <form onSubmit={event => submitWord(event)}>
      <label>Word</label>
      <input
        type="text"
        name="word"
        value={word.word}
        onChange={handleInputChange}
      />
      <label>Translation</label>
      <input
        type="text"
        name="translation"
        value={word.translation}
        onChange={handleInputChange}
      />
      <button>Add New Word</button>
    </form>
  );
};

export default AddUserForm;

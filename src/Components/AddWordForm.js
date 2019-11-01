import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, word: "", translation: "" };
  const [word, setWord] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setWord({ ...word, [name]: value });
  };
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!word.word || !word.translation) return;

        props.addWord(word);
        setWord(initialFormState);
      }}
    >
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

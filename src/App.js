import React from 'react';
import './index.css'
import UserTable from './Components/UserTable'

const App = () => {
  return (
    <div className="container">
      <h1>Language Barriers</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Word</h2>
        </div>
        <div className="flex-large">
          <h2>Translation</h2>
          <UserTable />
        </div>
      </div>
    </div>
    )
}

export default App;

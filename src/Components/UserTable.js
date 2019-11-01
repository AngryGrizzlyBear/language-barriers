import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Word</th>
        <th>Translation</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.words.length > 0 ? (
        props.words.map(word => (
          <tr key={word.id}>
            <td>{word.word}</td>
            <td>{word.translation}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No words</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;

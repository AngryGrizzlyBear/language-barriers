import React from "react";

const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Word</th>
        <th>Translation</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Word Data</td>
        <td>Translation Data</td>
        <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default UserTable
import React from 'react';
import API from "./utils/api.js";
import './App.css';

function App() {
  var resarray=[];
  API.getUserList()
  .then((results) => {
    console.log(results);
    resarray=results;
  })
  .catch(err => console.log(err));
  return (
    <div>
    <ul className="list-group">
      {resarray.map(result => (
        <li className="list-group-item" key={result.id}>
          <h1>hello</h1>
          <img alt="bingus" src={result.image} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;

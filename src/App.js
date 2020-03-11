import React from 'react';
import './App.css';
import wands from './wands'
import Wandlist from './WandList';
function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="content col-10">
          <Wandlist wands={wands} />
        </div>
      </div>
    </div>
  );
}

export default App;

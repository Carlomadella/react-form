// import { useState } from 'react'

const players = ['Ter Stegen', 'Thiago Silva', 'Messi', 'Tonali', 'Lewandowski'] 

function App() {
  
  return (
    <>
      <div className="container">
        <h1>5-a-side</h1>
        <ul className="list-group mb-4">
          {players.map((player,index) =>(
            <li key={index} className="list-group-item">{player}</li>
          ))}
        </ul>
        
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

const initialPlayers = ['Ter Stegen', 'Thiago Silva', 'Messi', 'Tonali', 'Lewandowski'] 

function App() {
  const [newPlayer, setNewPlayer] = useState ("")
  const [players, setPlayers] = useState(initialPlayers)

  const addPlayer = (e) =>{
    e.preventDefault();
    setPlayers([...players, newPlayer]);
    setNewPlayer("")
  }

  return (
    <>
      <div className="container">
        <h1>5-a-side</h1>
        <ul className="list-group mb-4">
          {players.map((player,index) =>(
            <li key={index} className="list-group-item">{player}</li>
          ))}
        </ul>
        <form onSubmit={addPlayer}>
          <div type="text" className="input-group" placeholder="Nuovo giocatore">
            <input type="text" className='form-control' placeholder='Inserisci un nuovo giocatore' value={newPlayer} onChange={(e) => {setNewPlayer(e.target.value)}} />
            <button className="btn btn-primary">Aggiungi</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App

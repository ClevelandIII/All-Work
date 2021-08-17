import Lists from "./components/Lists";
import data from './data'
import React, { useState } from 'react'


function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <Lists people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
        <button onClick={() => setPeople(data)}>Reset</button>
      </section>
    </main>
  );
}

export default App;

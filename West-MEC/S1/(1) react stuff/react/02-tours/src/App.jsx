import React, { useState, useEffect } from "react";
import Loading from "./Pages/Loading";
import Tours from "./Pages/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);
 
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  // fetchTours()

  useEffect(() => {
    setLoading(true)
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <h1>There was an error</h1>
      </main>
    );
  }
  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <div className="underline">
            <button className="button" onClick={() => fetchTours()}>Refresh</button>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;

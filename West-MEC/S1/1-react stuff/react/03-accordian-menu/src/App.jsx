import React, { useState } from "react";
// import Interests from "./components/Interests";
import Interest from "./components/Interest";
import questions from "./data";

function App() {
  const [query, setQuery] = useState(questions);
  return (
    <main>
      <section className="container">
        <h2 className="center">Questions And Answers About Login</h2>
        <div>
          {questions.map((question) => {
            return <Interest {...question} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

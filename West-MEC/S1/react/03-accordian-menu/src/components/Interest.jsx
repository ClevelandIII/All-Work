import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import { Dash } from "react-bootstrap-icons";

const Interest = ({ title, id, info }) => {
  const [more, setMore] = useState(false);
  return (
    <article key={id} className="lists">
      <header className="visible">
        <h3>{title}</h3>
        <button className="icon" onClick={() => setMore(!more)}>
          {more ? <Dash /> : <Plus />}
        </button>
      </header>
      <footer>
        <p>{more && `${info}`}</p>
      </footer>
    </article>
  );
};

export default Interest;

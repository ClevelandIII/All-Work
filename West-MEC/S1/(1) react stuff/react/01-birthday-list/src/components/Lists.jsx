import React from "react";

const Lists = ({ people, removePerson }) => {
  return people.map((person) => { 
    const { id, name, age, image } = person;
    return ( 
      <article key={id} className="lists">
        <img src={image} alt={name} />
        <div> 
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
        <button onClick={() => removePerson(id)}>Remove</button>
      </article>
    );
  });
};

export default Lists;
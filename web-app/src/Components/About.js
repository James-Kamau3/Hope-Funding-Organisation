import React from 'react';
import React, { useState, useEffect } from 'react';

function About () {
  const [cardObject, setCardObject] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    alert('Amount To Donate________')

  }

  useEffect(() => {
    fetch('http://localhost:8001/cardObject')
      .then(res => res.json())
      .then((data) => setCardObject(data))
      .catch((err) => console.log(err))
  }, []);


    return(
        <div className="Cards">
      {/* <h2>Funding Pages</h2> */}
      {cardObject.map((cardObjects) => (
        <div key={cardObjects.index}>
          {cardObjects.title}<br></br>
          {cardObjects.description}<br></br>
          <img src={cardObjects.imageUrl} alt='img'/>
          <button onClick={handleClick} >Donate</button>
        </div>
        
        
      ))}
    </div>
    );
}
export default About;

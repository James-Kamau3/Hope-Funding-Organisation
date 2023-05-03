import React from 'react';

function About ({cardObject}) {

    return(
        <div className="Cards">
      {/* <h2>Funding Pages</h2> */}
      {cardObject.map((cardObjects) => (
        <div key={cardObjects.index}>
          {cardObjects.title}<br></br>
          {cardObjects.description}<br></br>
          <img src={cardObjects.imageUrl} alt='img'/>
        </div>
      ))}
    </div>
    );
}

export default About;
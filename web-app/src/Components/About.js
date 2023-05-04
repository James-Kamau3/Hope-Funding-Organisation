import React from 'react';
import { Link } from 'react-router-dom';
function About ({cardObject}) {
  return (
    <div className="Cards">
      {cardObject.map((card, index) => (
        <div key={index}>
          <Link to={`/education/${index}`}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <img src={card.imageUrl} alt="card" />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default About;

// / import React from 'react';

// function About ({cardObject}) {
//   const handleCardClick = (cardIndex) => {
//     // navigate the user to the corresponding file for the clicked card
//     window.location.href = cardObject[cardIndex].education;
//   };

//   return (
//     <div className="Cards">
//       {cardObject.map((card, index) => (
//         <div key={index} onClick={() => handleCardClick(index)}>
//           <h2>{card.title}</h2>
//           <p>{card.description}</p>
//           <img src={card.imageUrl} alt="card" />
//         </div>
//       ))}
//     </div>
//   );
// }



// function About ({cardObject}) {
  
  
//     return(
//         <div className="Cards">
//       {/* <h2>Funding Pages</h2> */}
//       {cardObject.map((cardObjects) => (
//         <div key={cardObjects.index}>
//           {cardObjects.title}<br></br>
//           {cardObjects.description}<br></br>
//           <img src={cardObjects.imageUrl} alt='img'/>
//         </div>
//       ))}
//     </div>
//     );
// }

// export default About;
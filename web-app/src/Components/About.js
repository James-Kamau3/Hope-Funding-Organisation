// import React from 'react';

// function About (props) {

//     console.log(props)
//     return(
//         <div className="card">
//       <img src={props.imageUrl} alt={props.imageAlt} />
//       <div className="card-content">
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//       </div>
//     </div>
//     );
// }

// export default About;




import React from 'react';

function About ({cardObject}) {

    return(
        <div className="Cards">
      {/* <h2>Funding Pages</h2> */}
      {cardObject.map((cardObjects) => (
        <div key={cardObjects.index}>
          {cardObjects.title}<br></br>
          {cardObjects.description}<br></br>
          <img src={cardObjects.imageUrl}/>
        </div>
      ))}
    </div>
    );
}

export default About;
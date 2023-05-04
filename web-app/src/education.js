import React from 'react';
import { useParams } from 'react-router-dom';
function Education ({cardObject}) {
  const { index } = useParams();
  const educationInfo = cardObject[index].education;
  return (
    <div>
      <h2>{educationInfo.title}</h2>
      <p>{educationInfo.description}</p>
      <img src={educationInfo.imageUrl} alt="education" />
    </div>
  );
}
export default Education;

// import React from 'react'
// import DonForm from './DonForm'

// function education() {
//   return (
//     <div>
//         <h1>Education & learning</h1>
//     <p>

//     </p>
//     <DonForm/>
//     </div>

//   )
// }

// export default education
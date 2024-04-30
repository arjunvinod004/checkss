// import React from 'react'
// import { useEffect, useState } from "react";
// function Checkbox() {
//     const [checkboxValues, setCheckboxValues] = useState([
//     ]);
//     const[state,setState]=useState(true)
    
//       const handleCheckboxChange = (event) => {
//         const { name, checked } = event.target;
//         setCheckboxValues({
//           ...checkboxValues,
//           [name]: checked,
//         });
//       };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="a"
//           checked={checkboxValues.a}
//           onChange={handleCheckboxChange()}
//         />
//         Option 1
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="b"
//           checked={checkboxValues.b}
//           onChange={handleCheckboxChange()}
//         />
//         Option 2
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="c"
//           checked={checkboxValues.c}
//           onChange={handleCheckboxChange()}
//         />
//         Option 3
//       </label>
//       {/* Add more checkboxes as needed */}
//       <br />
//       <button onClick={() => console.log(checkboxValues)}>Get Selected Values</button>  
//     </div>
//   )
// }

// export default Checkbox


import React from 'react'

function Checkbox() {
  const arr=100
  for(let i=0;i<=arr;i++){
  // console.log(i);
  if(i<=50){
    console.log(i);
  
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default Checkbox

import React, {useState} from 'react';

const Selection = ({applyColor})=>{
  const [style, setStyle] = useState({background: ""});

  return(
    <div
     className='fix-box'
     style={{ background: style.background }}
     onClick={()=> applyColor(setStyle)}
   >
  </div>
  );
};

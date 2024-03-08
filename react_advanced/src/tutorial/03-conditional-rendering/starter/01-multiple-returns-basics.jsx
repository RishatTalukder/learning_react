import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [state,setState] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setState(false)
    }, 3000);
  },[])

  if (state){
    return <div>Shit is loading ...</div>
  }
  return <h2>Fuck</h2>;
};
export default MultipleReturnsBasics;

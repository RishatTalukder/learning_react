import { useState,useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();


  useEffect(()=>{
    console.log('call useEffect');
    if(value>1){
      console.log('value is greater than 1');
    }
  
  })

  return (
    <div
      className='d-flex justify-content-center align-items-center flex-column'
    >
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;

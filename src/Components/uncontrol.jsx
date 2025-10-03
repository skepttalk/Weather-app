import React, { useRef } from 'react';

const Uncontrol = () => {
  const InputRef = useRef(null);

  const handle = () => {
     const value = InputRef.current.value;
     alert(value)
    console.log(InputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={InputRef} />
      <button onClick={handle}>Log Value</button>
    </div>
  );
};

export default Uncontrol;

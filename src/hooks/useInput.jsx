import { useState } from 'react';

function useInput(defaultValue = ''){
  const [value, setValue] = useState(defaultValue);

  const onValueEventChanger = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueEventChanger];
}

export default useInput;
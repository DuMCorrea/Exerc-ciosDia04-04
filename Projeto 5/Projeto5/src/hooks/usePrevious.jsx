import { useState, useEffect } from 'react';

function usePrevious(value) {
  const [previousValue, setPreviousValue] = useState(null);

  useEffect(() => {
    setPreviousValue(value);
  }, [value]);

  return previousValue;
}

export default usePrevious;
import React, { useRef, useEffect } from 'react';

const FocoInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default FocoInput;
import { useState } from "react";

export const AddCategory = ({onNewValue}) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewValue(inputValue.trim());
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

import React, { useState } from 'react';
import { SearchComponentWrapper, Button, Input } from './search-component.style';



const Search = ({ onSubmit }) => {
  let inputValue = React.createRef();
  const getInputValue = (evt) => {
      onSubmit(inputValue.current.value);
  }
  return (
      <SearchComponentWrapper>
          <Input type="text" ref={inputValue} placeholder={"Enter Something..."}/>
          <Button onClick={getInputValue}>Submit</Button>
      </SearchComponentWrapper>
  );
}

export default Search;

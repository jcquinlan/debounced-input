import React from 'react';
import ReactDOM from 'react-dom';
import DebouncedInput from './DebouncedInput';

function handleChange(text) {
  console.log(text);
}

ReactDOM.render(
  <DebouncedInput debounceTime={ 200 } handleChange={ handleChange }/>,
  document.getElementById('root')
);

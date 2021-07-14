import './App.css';
import Results from './components/Results/results-component';
import Search from './components/Search/search-component';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('')

  const onSubmitSearch = (val) => {
    setValue(val)
  }

  return (
    <div className="App">
      <a><h1>Test Demo!</h1></a>
      <Search onSubmit={(value) => onSubmitSearch(value)}></Search>
      <Results value={value}></Results>
    </div>
  );
}

export default App;

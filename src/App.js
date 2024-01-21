
import './App.css';
import Autocomplete from './components/Autocomplete';

function App() {
  const cityNames = [
		"Amsterdam",
		"Berlin",
		"London",
		"New York",
		"Paris",
		"Rome",
		"San Francisco",
		"Tokyo",
		"Washington DC",
		"Zurich",
		"Copenhagen",
		"Helsinki",
		"Madrid",
		"Reykjavik",
		"Stockholm",
		"Vancouver",
		"Vienna",
		"Zagreb",
		"Budapest",
		"Dublin",
		"Hamburg",
		"Krakow",
		"Lisbon",
		"Ljubljana",
	];
  return (
    <div className="App">
      
      <Autocomplete options={cityNames}/>
      
    </div>
  );
}

export default App;

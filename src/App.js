import './App.css';
import Card from './components/card';

function App() {
  const card =   {
    "id": 205,
    "name": "Splendide terrasse vue imprenable",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg",
    "price": 115,
    "priceCurrency": "EUR",
    "lat": 48.881840,
    "lng": 2.343371
  };

  return (
    <div className="App">
      <div className='main'>
        <div className='search'>
        </div>
        <div className='cards'>
          <Card card={card} />
          <Card card={card} />
          <Card card={card} />
        </div>
      </div>
      <div className='map'>
      </div>
    </div>
  );
}

export default App;

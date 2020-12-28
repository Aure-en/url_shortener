import UrlShortener from './components/UrlShortener';
import Header from './components/Header';
import './style.css';
import Hero from './components/Hero';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UrlShortener />
      <Statistics />
    </div>
  );
}

export default App;

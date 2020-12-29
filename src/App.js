import UrlShortener from './components/UrlShortener';
import Header from './components/Header';
import Hero from './components/Hero';
import Boost from './components/Boost';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UrlShortener />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;

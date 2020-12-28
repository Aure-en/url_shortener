import UrlShortener from './components/UrlShortener';
import Header from './components/Header';
import './style.css';
import Hero from './components/Hero';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1440px;
`;


function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Hero />
      <UrlShortener />
    </AppContainer>
  );
}

export default App;

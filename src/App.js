import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import './App.css';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;

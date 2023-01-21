import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllBeers from './pages/AllBeers';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
      </Routes>
    </div>
  );
}

export default App;

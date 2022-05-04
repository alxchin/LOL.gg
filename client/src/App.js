
import './App.css';
import SearchPage from './screen/SearchPage'
import PrevGame from './components/PrevGame';
import GlobalStyle from './globalstyle/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stats from './statpage/Stats';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/summoner/:id" element={<Stats />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;

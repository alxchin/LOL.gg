
import './App.css';
import SearchPage from './screen/SearchPage'
import PrevGame from './components/PrevGame';
import GlobalStyle from './globalstyle/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stats from './statpage/Stats';
import History from './history/History';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/summoner/:id" element={<Stats />} />
          <Route path="/summoner/:id/history" element={<History />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;

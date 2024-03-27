// import logo from './logo.svg';
import './App.css';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from './components/layout';
import HomeFunc from './components/pages/home';
import ExploreFunc from './components/pages/explore';
import GenreFunc from './components/pages/genre';
import NewsFunc from './components/pages/news';
import ShowsFunc from './components/pages/tvshow';
import MoviesFunc from './components/pages/movies';
import NavBar from './components/navbar';

function App() {
  return (
    <Router>
      <NavBar>
      <Routes>
          <Route index element={<HomeFunc />} />
          <Route path="/explore/:id" element={<ExploreFunc />} />
          <Route path="/genre" element={<GenreFunc />} />
          <Route path="/news" element={<NewsFunc />} />
          <Route path="/movies/:id" element={<MoviesFunc />} />
          <Route path="/tvshow" element={<ShowsFunc />} />
      </Routes>
      </NavBar>
    </Router>
  );
}

export default App;
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MenuTop from "./components/MenuTop/MenuTop";

//Pages
import Error404 from "./pages/Error/Error404";
import Home from "./pages/Home";
import Movie from "./pages/Movie/Movie";
import NewMovies from "./pages/NewMovies";
import Popular from "./pages/Popular";
import Search from "./pages/Search";

import "./App.css";

function App() {
  const { Header, Content } = Layout;
  return (
    <div className="App">
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/new-movies" exact={true} element={<NewMovies />} />
            <Route path="/movie/:id" exact={true} element={<Movie />} />
            <Route path="/search" exact={true} element={<Search />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </div>
  );
}

export default App;

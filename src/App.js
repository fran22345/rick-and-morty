import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Favorite from "./components/Favoritos";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "d5141f0111b7.0deae643d9889361479b";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let EMAIL = "fran22345@gmail.com";
  let PASSWORD = "123fran";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("¡No hay personajes con este ID!");
      }
    });
  };
  const onClose = (id) => {
    const characterFilter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(characterFilter);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;

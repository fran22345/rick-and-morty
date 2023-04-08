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

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
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
  const location = useLocation();
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
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
      </Routes>
    </div>
  );
}

export default App;

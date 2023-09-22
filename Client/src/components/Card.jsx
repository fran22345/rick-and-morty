import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorite,
}) {
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    }
    if (!isFav) {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorite.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorite]);

  return (
    <div>
      <button onClick={()=> {onClose(id)}}>X</button>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{status}</h2>
        <h2>{origin}</h2>
        <img src={image} alt=""/>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorite: state.myFavorite,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

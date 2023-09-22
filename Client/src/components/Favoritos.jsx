import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { orderCards, filterCards } from "../redux/actions";
import { useEffect, useState } from "react";

const FavCard = ({ myFavorite }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    setAux(true);
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  useEffect(()=>{
    dispatch(filterCards("Todos"))
    dispatch(orderCards("A"))
  },[])
  return (
    <div>
      <select onChange={handleOrder} name="" id="">
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} name="" id="">
        <option value="Todos">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorite?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            gender={fav.gender}
            image={fav.image}
          ></Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorite: state.myFavorite,
  };
};

export default connect(mapStateToProps, null)(FavCard);

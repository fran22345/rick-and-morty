import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({onSearch, logout}) {
  return (
    <nav>
      <Link to="/about"><button>About</button></Link> 
      <Link to="/home"><button >Home</button></Link> 
      <SearchBar onSearch={onSearch}/>
      <hr />
      <button onClick={logout}>Logout</button>
      <Link to="/favorites"><button>Favorite</button></Link>
      <hr />
    </nav>
  );
}

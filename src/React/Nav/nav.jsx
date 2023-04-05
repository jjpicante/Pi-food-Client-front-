import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./Nav.module.css"


export default function Nav() {

return (
  <div className={style.nav}>
    <NavLink to="/home" className={style.botones}>
      <span>Home</span>
    </NavLink>
    <NavLink to="/form" className={style.botones}>
      <span>Creá tu receta</span>
    </NavLink>
    <SearchBar />
  </div>
);
}

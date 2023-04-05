import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ image, name, diets, id }) {
  return (
    <div className={style.card}>
      <h1 className={style.name}>{name}</h1>
      <NavLink to={'/detail/' + id}>
      <img src={image} alt="img not found" className={style.img} />
      </NavLink>
      <div className={style.diets}>
        {diets?.map((e, i) => {
          return (
            <h3 className={style.diet} key={i}>
              {e}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

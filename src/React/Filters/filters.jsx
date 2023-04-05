import style from "./Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterRecipeByDiets,
  filterRecipeByOrigin,
  sortByName,
  sortByHs,
} from "../../Redux/actions";

export default function Filters({setCurrentPage , setOrden}) {
  const dietas = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  const handleFilterDiet = (e) => {
    dispatch(filterRecipeByDiets(e.target.value));
    setCurrentPage(1)
  };

  const handleFilterOrigin = (e) => {
    dispatch(filterRecipeByOrigin(e.target.value));
    setCurrentPage(1)
  };

  const handleFilterByName = (e) => {
    dispatch(sortByName(e.target.value));
    setCurrentPage(1)
    setOrden(`Ordenado${e.target.value}`)
  };

  const handleFilterByHs = (e) => {
    dispatch(sortByHs(e.target.value));
    setCurrentPage(1)
    setOrden(`Ordenado${e.target.value}`)
  };

  return (
    <div className={style.filtros}>
      <div className={style.indivContainer}>
        <p>Ordená por nombre</p>
        <select
          className={style.selects}
          title="Ordenar recetas por nombre"
          onChange={(e) => handleFilterByName(e)}
        >
          <option value="-">-</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      <div className={style.indivContainer}>
        <p>Ordená por Healt Score</p>
        <select
          className={style.selects}
          title="Ordenar recetas por Healt Score"
          onChange={(e) => handleFilterByHs(e)}
        >
          <option value="-">-</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div className={style.indivContainer}>
        <p>Filtrá por dietas</p>
        <select
          className={style.selects}
          title="Filtrá por dietas"
          onChange={(e) => handleFilterDiet(e)}
        >
          <option value="all">Dietas</option>
          {dietas?.map((elem) => {
            return (
              <option value={elem.name} key={elem.id}>
                {elem.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.indivContainer}>
        <p>Filtrá por orígen</p>
        <select
          className={style.selects}
          title="Filtrar por orígen"
          onChange={(e) => handleFilterOrigin(e)}
        >
          <option value="Todas">Todas</option>
          <option value="Creadas">Creadas</option>
          <option value="api">De la página</option>
        </select>
      </div>
    </div>
  );
}

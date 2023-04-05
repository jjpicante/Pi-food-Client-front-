import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import Card from "../Card/card";
import Filters from "../Filters/filters";
import Paginado from "../Paginado/paginado";
import { getRecipes, getDiets } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const recetas = useSelector((state) => state.recipes);
  const noResultsFound = useSelector((state) => state.noResultsFound);

  if (typeof recetas === "string") {
    alert(recetas);
    window.location.reload();
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [orden, setOrden] = useState("");
  const recipesPerPage = 9;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recetas.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  if (!recetas.length && !noResultsFound.length) {
    return (
      <div className={style.loading}>
        <h1>CARGANDO...</h1>
      </div>
    );
  }
  if (noResultsFound.length) {
    alert(noResultsFound[0]);
    window.location.reload();
  }

  return (
    <div className={style.bodyHome}>
      <Filters setCurrentPage={setCurrentPage} setOrden={setOrden} />
      <div className={style.cardsContent}>
        {currentRecipes?.map((elem) => {
          if (elem.id === undefined) {
            return null;
          }
          return (
            <Card
              id={elem.id}
              name={elem.name}
              image={elem.image}
              diets={elem.diets}
              key={elem.id}
              healthscore={elem.healthscore}
            />
          );
        })}
      </div>
      <div className={style.paginado}>
        <Paginado
          recipesPerPage={recipesPerPage}
          recetas={recetas.length}
          paginado={paginado}
          activePage={activePage}
        />
      </div>
    </div>
  );
}

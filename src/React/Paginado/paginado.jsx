import React from "react";
import style from "./Paginado.module.css";

export default function Paginado({
  recipesPerPage,
  recetas,
  paginado,
  activePage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(recetas / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={style.paginado}>
        <button
          className={style.numero}
          onClick={() => paginado(activePage - 1)}
          disabled={activePage === 1}
        >
          🢀
        </button>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className={
                number === activePage
                  ? `${style.numero} ${style.active}`
                  : style.numero
              }
              key={number}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          ))}
        <button
          className={style.numero}
          onClick={() => paginado(activePage + 1)}
          disabled={activePage === pageNumbers.length}
        >
          🢂
        </button>
      </div>
    </nav>
  );
}

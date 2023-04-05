import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const recipeById = useSelector((state) => state.recipeByID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  if (!Object.keys(recipeById).length) {
    return (
      <div className={style.loading}>
        <h1>CARGANDO...</h1>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.containUno}>
        <p className={style.id}>Id: {recipeById.id}</p>
        <h1 className={style.name}>{recipeById.name}</h1>
        <img
          className={style.image}
          src={recipeById.image}
          alt="img not found"
        />
        <div
          className={style.summary}
          dangerouslySetInnerHTML={{ __html: recipeById.summary }}
        />
        <div className={style.healthScore}>
        <h3> {recipeById.healthScore}</h3>
        </div>
      </div>
        <div className={style.steps}>
          <h2>Cómo hacerla</h2>
          <div>
            {recipeById.steps?.map((e, i) => {
              return (
                <div key={i}>
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.diets}>
          {recipeById.diets?.map((e, i) => {
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

import React, { useState, useEffect } from "react";
import { postRecipes, getDiets } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const [input, setInput] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    Diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    Diets: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlePushSteps = (e) => {
    setInput({
      ...input,
      steps: [...input.steps, e.target.form.steps.value],
    });
    e.target.form.steps.value = "";
  };

  const handleDeleteStep = () => {
    setInput({
      ...input,
      steps: input.steps.slice(0, -1),
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      Diets: [...input.Diets, e.target.value],
    });
  };

  const handleResetdiets = () => {
    setInput({
      ...input,
      Diets: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipes(input));
    alert("Receta creada... A cocinar!!");
    setInput({
      name: "",
      image: "",
      summary: "",
      healthScore: "",
      steps: [],
      Diets: [],
    });
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  
  return (
    <div className={style.bodyForm}>
      <div className={style.container}>
        <div className={style.boxForm}>
          <h1 className={style.titulo}>Creá tu receta</h1>
          <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
            <label>Nombre:</label>
            <br />
            <input
            className={style.input}
              type="text"
              id="nombre"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {/* {errors.name && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.name}</p>}  */}
            <br />

            <label>Resumen del plato:</label>
            <br />
            <textarea
            className={style.textarea}
              id="resumen"
              name="summary"
              value={input.summary}
              onChange={(e) => handleChange(e)}
            ></textarea>
            {/* {errors.summary && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.summary}</p>} */}
            <br />

            <label>Nivel de comida saludable:</label>
            <br />
            <input
            className={style.input}
              id="saludable"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
            />
            {/*  {errors.healthScore && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.healthScore}</p>} */}
            <br />

            <label htmlFor="pasoapaso">Paso a paso:</label>
            <br />
            <textarea className={style.textarea} id="pasoapaso" name="steps" />
            <div className={style.buttonContainer}>
              <button className={style.button} type="button" onClick={(e) => handlePushSteps(e)}>
                Agregar paso
              </button>
              <button className={style.button} type="button" onClick={(e) => handleDeleteStep(e)}>
                Eliminar paso
              </button>
            </div>
            <br />
            {input.steps.map((step, index) => (
              <div key={index}>
                {index + 1} - {step}
              </div>
            ))}

            <label>URL Imagen:</label>
            <br />
            <input
            className={style.input}
              id="img"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            {/* {errors.image && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.image}</p>} */}
            <br />
            <label>Dietas:</label>
            <br />

            <select onChange={(e) => handleSelect(e)}>
              {diets?.map((elem, index) => {
                return (
                  <option key={index} value={elem.name}>
                    {elem.name}
                  </option>
                );
              })}
            </select>

            <button className={style.button} type="button" onClick={() => handleResetdiets()}>
              reset dietas
            </button>

            <br />

            <div className={style.dietasContainer}>
              {input.Diets.map((elem) => (
                <h4 className={style.dietas} key={elem}>{elem}</h4>
              ))}
            </div>
            <input
              className={style.submit}
              type="submit"
              value="Crear Receta"
              disabled={Object.keys(errors).some((key) => errors[key] !== "")}
            />
          </form>
        </div>
      </div>
      <div className={style.errores}>
      {errors.name && <p style={{fontWeight: 'bolder'}}>{errors.name}</p>}
      {errors.summary && <p style={{fontWeight: 'bolder'}}>{errors.summary}</p>}
      {errors.healthScore && <p style={{fontWeight: 'bolder'}}>{errors.healthScore}</p>}
      {errors.image && <p style={{fontWeight: 'bolder'}}>{errors.image}</p>}
      </div>
    </div>
  );
}

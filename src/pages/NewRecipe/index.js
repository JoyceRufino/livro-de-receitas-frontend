import React from "react";
import Header from "../../components/Header";
import HeaderMain from "../../components/HeaderMain";
import { useForm } from "react-hook-form";
import "./new.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'


///PAUSA CURSO PARA FAZER API NA ALURA PARA ESTE PROJETO https://www.youtube.com/watch?v=dLNoMqLoOzU



//vai validar todos os campos
const validationPost = yup.object().shape({
  recipe: yup
    .string()
    .required("O nome da receita é obrigatório!")
    .max(50, "O titulo da receita precisa ter no máximo 50 caracteres!"),
  description: yup.string().required("A descrição da receita é obrigatória!"),
  content: yup.string().required("O conteúdo da receita é obrigatório!"),
});

// no curso é pagina POST
function NewRecipe() {
  //biblioteca
  //register - avisa quais são os inputs do formulario que vou registrar
  //handlesubmit - para lidar co mo envio das informações
  // errors - avisos de erro na validação do formulário

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (values) => axios.post();

  return (
    <div>
      <HeaderMain />
      <Header />
      <p>nova receita</p>

      <main>
        <div className="card-post">
          <h1>Registrar nova receita</h1>
          <div className="line-post"></div>
          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome da receita:</label>
                <input type="text" name="recipe" {...register("recipe")} />
                <p className="error-message">{errors.recipe?.message}</p>
              </div>

              <div className="fields">
                <label>Descrição:</label>
                <input
                  type="text"
                  name="description"
                  {...register("description")}
                />
                <p className="error-message">{errors.description?.message}</p>
              </div>

              <div className="fields">
                <label>Conteudo:</label>
                <textarea
                  type="text"
                  name="content"
                  {...register("content")}
                ></textarea>
                <p className="error-message">{errors.content?.message}</p>
              </div>
              <div className="btn-post">
                <button type="submit"> Enviar </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewRecipe;


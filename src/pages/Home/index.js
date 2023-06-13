import React from "react";
import HeaderMain from "../../components/HeaderMain";
import "./home.css";
import { NavLink } from "react-router-dom";

// no curso é pagina feed
const Home = () => {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Bolo de Brigadeiro</h2>
            </header>
            <div className="line"></div>
            <p>
              Ovos. Indispensável no preparo da receita, os ovos são ricos em
              proteína e cada elemento dele tem uma função na receita. ...
              Farinha de trigo. ... Açúcar. ... Gordura. ... Fermento químico.
            </p>
            <div className="btns">
              <div className="btn-edit">
                <NavLink to="/edit">
                  <button>Editar</button>
                </NavLink>
              </div>

              <div className="btn-readmore">
                <NavLink to="/complete">
                  <button>Ler mais</button>
                </NavLink>
              </div>

              <div className="btn-delete">
                <button>Deletar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

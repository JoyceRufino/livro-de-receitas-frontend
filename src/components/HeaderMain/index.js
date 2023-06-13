import React from "react";
import "./headermain.css";
import { NavLink } from "react-router-dom";

const HeaderMain = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
          <NavLink to='/'>
            <h1>Meu Livro de Receitas</h1>
          </NavLink>
            
          </div>
          <div className="btn-novaReceita">
            <NavLink to='/new'>
              <button>Nova receita</button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;

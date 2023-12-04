import React from "react";
import usuario from '../assets/usuarioLogin.png';
import AppHeader from "../components/header";
import AppFooter from "../components/footer";


export default function AppUsuario(){
    return(
      <div className="App">
      <header id="header">
      <AppHeader/>
      </header>
      <main>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        <img src={usuario} alt="login"/>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
    </main>
            <footer id="footer">
            <AppFooter/>
            </footer>
        </div>
    );
}
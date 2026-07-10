import {button} from "../atoms/button.js";

export function header() {
  return `
    <header class="header-global"> 
      <div class="nav-container">
      <img src="./public/icons/isotipo_tourPoints.svg" alt="TourPoints Logo" class="logo-footer">
      <a href="/" class="logo">TourPoints</a>
      <nav class="navegation">
        <a class="menu menu-active" href="">Explora</a>
        <a class="menu" href="">Retos</a>
        <a class="menu" href="">Recompesas</a>
        <a class="menu" href="">Mapa</a>
      </nav>
      </div>
      <div class="buttons-container">
      ${button("/#", "Iniciar Sesion", "secondary")} 
      ${button("/#", "Registrarse", "primary")}
      </div>
      <button class="user-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M17.925 20.056a6 6 0 0 0-11.851.001"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="12" r="10"/></svg>
      </button>
    </header>
    `;
}


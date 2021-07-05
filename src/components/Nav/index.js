import React from 'react';
import './NavElements.css'

function Nav(props) {
  return(
      <>
    <div className="Titulo typing-animation">
     <p>Procure seu anime favorito</p>
     </div>
      <div>
          {props.children}
      </div>
      </>
  );
}

export default Nav;
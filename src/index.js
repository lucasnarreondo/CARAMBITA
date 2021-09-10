import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
                     /////meter adentro del div los componentes SIEMPRE sino tira error
    <div>
    <App />
    </div>
  , document.getElementById('root'));   /////Muestra el componente APP, aca pueden ir varios...
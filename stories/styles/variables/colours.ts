import coloursCSS from './colours.scss';
import coloursHTML from './colours.html';

import colourSwatch from './colour-swatch';

customElements.define('colour-swatch', colourSwatch);

class ColoursDemo extends HTMLElement {
  connectedCallback () {
    const shadow = this.attachShadow({mode: 'closed'});
    console.log('colours demo ', coloursHTML);
    console.log('.....', coloursCSS);
    const style = document.createElement('style');
    style.innerHTML = coloursCSS;
    const div = document.createElement('div');
    div.innerHTML = coloursHTML;
    shadow.appendChild(style);
    shadow.appendChild(div.firstChild);

  }
}

export default ColoursDemo;

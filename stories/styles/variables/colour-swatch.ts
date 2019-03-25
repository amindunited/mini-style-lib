import coloursCSS from './colour-swatch.scss';
import coloursHTML from './colour-swatch.html';

class ColourSwatch extends HTMLElement {
  connectedCallback () {
    const shadow = this.attachShadow({mode: 'closed'});
    const style = document.createElement('style');
    style.innerHTML = coloursCSS;
    const div = document.createElement('div');
    div.innerHTML = coloursHTML;
    shadow.appendChild(style);
    shadow.appendChild(div.firstChild);
  }
}

export default ColourSwatch;

import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import ColoursDemo from './styles/variables/colours';

customElements.define('colours-demo', ColoursDemo);

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });

storiesOf('Variables', module)
  .add('Colours', () => {
    return '<colours-demo></colours-demo>';
  })

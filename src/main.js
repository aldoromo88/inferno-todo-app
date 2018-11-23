import { render } from 'inferno';
import App from 'components/App';
import 'scss/index.scss';

console.log(environment);

render(<App />, document.getElementById("app"));
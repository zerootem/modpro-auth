import { render } from 'solid-js/web';
import App from './App';
import './styles/global.css';

const root = document.getElementById('accountContent');
if (root) {
  render(() => <App />, root);
} else {
  console.error('Root element #accountContent not found');
}

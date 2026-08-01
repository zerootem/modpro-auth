import { render } from 'solid-js/web';
import App from './App';
import './styles/global.css';

// البحث عن العنصر المناسب
const root = document.getElementById('accountContent') || document.getElementById('root');

if (root) {
  render(() => <App />, root);
} else {
  console.error('لم يتم العثور على عنصر الجذر (#accountContent أو #root)');
}

import home from './pages/home/home';
import profile from './pages/profile/profile';
import auth from './pages/auth/auth';
import error from './pages/error/error';
import './index.scss';

const currentPath = window.location.pathname;
const rootElement = document.getElementById('app');

switch(currentPath) {
  case '/auth/login':
  case '/auth/registration':
    rootElement.innerHTML = auth();
    break;
  case '/profile':
    rootElement.innerHTML = profile();
    break;
  case '/':
    rootElement.innerHTML = home();
    break;
  default:
    rootElement.innerHTML = error();
}

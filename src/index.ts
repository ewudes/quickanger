import render from "./utils/render";

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Auth from './pages/auth/auth';
import Error from './pages/error/error';
import './index.scss';

const currentPath: string = window.location.pathname;

switch(currentPath) {
  case '/auth/login':
  case '/auth/registration':
    render("#app", new Auth());
    break;
  case '/profile':
    render("#app", new Profile());
    break;
  case '/':
    render("#app", new Home());
    break;
  default:
    render("#app", new Error());
}

// import render from "./utils/render";

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Auth from './pages/auth/auth';
// import Error from './pages/error/error';
import './index.scss';
import router from "./utils/router";

// const currentPath: string = window.location.pathname;

router
  .use("/", Auth)
  .use("/registration", Auth)
  .use("/messenger", Home)
  .use("/profile", Profile)
  .start();


// switch(currentPath) {
//   case '/auth/login':
//   case '/auth/registration':
//     render("#app", new Auth());
//     break;
//   case '/profile':
//     render("#app", new Profile());
//     break;
//   case '/':
//     render("#app", new Home());
//     break;
//   default:
//     render("#app", new Error());
// }

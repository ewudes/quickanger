import Block from "../../utils/block";
import SignUp from "../../components/authForm/signUp/signUp";
import SignIn from "../../components/authForm/signIn/signIn";
import Error from "../error/error";

import auth from "./auth.tml";
import "./auth.scss";

class Auth extends Block {
  constructor(props: Record<string, any> = {}) {
    const pathName: string = window.location.pathname;
    const loginPath: string = "/";
    const registrationPath: string = "/registration";
    let signPage;

    switch(pathName) {
      case loginPath:
        signPage = new SignIn();
        break;
      case registrationPath:
        signPage = new SignUp();
        break;
      default:
        signPage = new Error();
    }

    super("div", { loginPath, registrationPath, signPage, ...props });
  }

  render() {
    return this.setTemplate(auth, this.props);
  }
}

export default Auth;

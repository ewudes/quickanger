import Block from "../../../utils/block";
import { focus, blur, submit } from "../../../utils/events";
import Input from "../../input/input";
import Button from "../../button/button";

import signIn from "./signIn.tml";
import "../authForm.scss";

class SignIn extends Block {
  constructor(props: Record<string, any> = {}) {
    const login = new Input({
      label: "login",
      type: "text",
      placeholder: "ivanivanov",
      required: "required",
      classField: "authForm__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const password = new Input({
      label: "password",
      type: "password",
      placeholder: "*********",
      required: "required",
      classField: "authForm__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const submitBtn = new Button({
      text: "Авторизоваться",
      style: "primary",
      type: "submit",
      className: "authForm__submit",
      events: {
        click: submit
      }
    });

    const signInBtn = new Button({
      text: "Нет аккаунта?",
      style: "primary",
      type: "button",
      className: "authForm__signIn"
    });

    super("div", { login, password, submitBtn, signInBtn, ...props });
  }

  render() {
    return this.setTemplate(signIn, this.props);
  }
}

export default SignIn;

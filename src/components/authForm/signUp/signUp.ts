import Block from "../../../utils/block";
import { focus, blur, submit } from "../../../utils/events";
import Input from "../../input/input";
import Button from "../../button/button";

import signUp from "./signUp.tml";
import "../authForm.scss";

class SignUp extends Block {
  constructor(props: Record<string, any> = {}) {
    const email = new Input({ label: "email", type: "email", placeholder: "pochta@yandex.ru", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const login = new Input({ label: "login", type: "text", placeholder: "ivanivanov", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const firstName = new Input({ label: "first_name", type: "text", placeholder: "Иван", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const lastName = new Input({ label: "second_name", type: "text", placeholder: "Иванов", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const phone = new Input({ label: "phone", type: "phone", placeholder: "+7 (909) 967 30 30", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const password = new Input({ label: "password", type: "password", placeholder: "*********", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const repeatPassword = new Input({ label: "repeat_password", type: "password", placeholder: "*********", required: "required", classField: "authForm__field", events: { focus: focus, blur: blur } });
    const submitBtn = new Button({ text: "Зарегистрироваться", style: "primary", type: "submit", className: "authForm__submit", events: { click: submit } });
    const signInBtn = new Button({ text: "Войти", style: "primary", type: "button", className: "authForm__signIn" });

    super("div", { email, login, firstName, lastName, phone, password, repeatPassword, submitBtn, signInBtn, ...props });
  }

  render() {
    return this.setTemplate(signUp, this.props);
  }
}

export default SignUp;

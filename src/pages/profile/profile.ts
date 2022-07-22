import Block from "../../utils/block";
import { focus, blur, submit } from "../../utils/events";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import profile from "./profile.tml";
import "./profile.scss";

class Profile extends Block {
  constructor(props: Record<string, any> = {}) {
    const email = new Input({
      label: "email",
      type: "email",
      placeholder: "pochta@yandex.ru",
      required: "required",
      classField: "profile__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const login = new Input({
      label: "login",
      type: "text",
      placeholder: "ivanivanov",
      required: "required",
      classField: "profile__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const firstName = new Input({
      label: "first_name",
      type: "text",
      placeholder: "Иван",
      required: "required",
      classField: "profile__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const lastName = new Input({
      label: "second_name",
      type: "text",
      placeholder: "Иванов",
      required: "required",
      classField: "profile__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const nickname = new Input({
      label: "display_name",
      type: "text",
      placeholder: "Иван",
      required: "required",
      classField: "profile__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const phone = new Input({
      label: "phone",
      type: "phone",
      placeholder: "+7 (909) 967 30 30",
      required: "required",
      classField: "profile__field",
      events: {
        focus: focus,
        blur: blur,
      }
    });

    const btnSubmit =  new Button({
      text: "Изменить данные",
      style: "primary",
      type: "submit",
      className: "profile__btnSubmit",
      events: {
        click: submit
      }
    });

    const btnChangePass = new Button({
      text: "Изменить пароль",
      style: "primary",
      type: "button",
      className: "profile__btnChangePass"
    });

    const btnClose = new Button({
      text: "Выйти",
      style: "danger",
      type: "button",
      className: "profile__btnClose"
    });

    super("div", {
      email,
      login,
      firstName,
      lastName,
      nickname,
      phone,
      btnSubmit,
      btnChangePass,
      btnClose,
      ...props
    });
  }

  render() {
    return this.setTemplate(profile, this.props);
  }
}

export default Profile;

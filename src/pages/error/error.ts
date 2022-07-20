import Block from "../../utils/block";
import Button from "../../components/button/button";

import error from "./error.tml";
import "./error.scss";

class Error extends Block {
  constructor(props: Record<string, any> = {}) {
    const errorBtn = new Button({ text: "Назад к чатам", style: "primary", type: "button", className: "error__btn" });
    super("div", { errorBtn, ...props });
  }

  render() {
    return this.setTemplate(error, this.props);
  }
}

export default Error;

// const textError = [
//   {
//     "status": "404",
//     "description": "Не туда попали"
//   },
//   {
//     "status": "500",
//     "description": "Мы уже фиксим"
//   }
// ]

// export default () => error({
//   textError,
//   errorBtn: button('Назад к чатам', 'primary', 'button', 'error__btn'),
// });

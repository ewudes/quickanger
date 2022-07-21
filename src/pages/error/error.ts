import Block from "../../utils/block";
import Button from "../../components/button/button";

import error from "./error.tml";
import "./error.scss";

class Error extends Block {
  constructor(props: Record<string, any> = {}) {
    const errorBtn = new Button({
      text: "Назад к чатам",
      style: "primary",
      type: "button",
      className: "error__btn"
    });

    super("div", { errorBtn, ...props });
  }

  render() {
    return this.setTemplate(error, this.props);
  }
}

export default Error;

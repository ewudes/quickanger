import Block from "../../utils/block";
import button from "./button.tml";
import "./button.scss";

interface IButton {
  className: string;
  style: string;
  text: string;
  type: string;
  events?: { click: (e: Event) => void };
}
class Button extends Block {
  constructor(props: IButton) {
    super("div", props);
  }

  render() {
    return this.setTemplate(button, this.props);
  }
}

export default Button;

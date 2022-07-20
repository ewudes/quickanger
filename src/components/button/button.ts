import Block from "../../utils/block";
import button from "./button.tml";
import "./button.scss";

class Button extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(button, this.props);
  }
}

export default Button;

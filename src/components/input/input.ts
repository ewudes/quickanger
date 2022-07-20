import Block from "../../utils/block";
import input from "./input.tml";

import "./input.scss";

class Input extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(input, this.props);
  }
}

export default Input;

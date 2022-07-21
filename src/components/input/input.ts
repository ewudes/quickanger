import Block from "../../utils/block";
import input from "./input.tml";

import "./input.scss";

interface IInput {
  classField: string;
  label: string;
  placeholder: string;
  required: string;
  type: string;
  events?: { focus: (e: Event) => void, blur: (e: Event) => void };
}

class Input extends Block {
  constructor(props: IInput) {
    super("div", props);
  }

  render() {
    return this.setTemplate(input, this.props);
  }
}

export default Input;

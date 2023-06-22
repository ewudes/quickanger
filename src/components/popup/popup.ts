import template from "./popup";
import Block from "../../utils/block";

class Popup extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Popup;

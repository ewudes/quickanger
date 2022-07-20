import Block from "../../../utils/block";
import message from "./message.tml";
import "./message.scss";

class Message extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(message, this.props);
  }
}

export default Message;

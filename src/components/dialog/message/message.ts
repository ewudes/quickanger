import Block from "../../../utils/block";

import message from "./message.tml";
import "./message.scss";

export interface IMessage {
  className: string;
  text: string;
}

class Message extends Block {
  constructor(props: IMessage) {
    super("div", props);
  }

  render() {
    return this.setTemplate(message, this.props);
  }
}

export default Message;

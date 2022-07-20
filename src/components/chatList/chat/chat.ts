import Block from "../../../utils/block";
import chat from "./chat.tml";
import "../chatList.scss";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(chat, this.props);
  }
}

export default Chat;

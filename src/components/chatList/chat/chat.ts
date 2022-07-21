import Block from "../../../utils/block";

import chat from "./chat.tml";
import "../chatList.scss";

export interface IChatList {
  title: string;
  lastMessage: string;
  date: string;
  badge: string;
}

class Chat extends Block {
  constructor(props: IChatList) {
    super("div", props);
  }

  render() {
    return this.setTemplate(chat, this.props);
  }
}

export default Chat;

import Block from "../../utils/block";
import router from "../../utils/router";
import store, { StoreEvents } from "../../utils/store";
import { isEmpty } from "../../utils/isEmpty";
import auth from "../../controllers/auth";
import chat from "../../controllers/chat";

import Search from "../../components/search/search";
import ChatList from "../../components/chatList/chatList";
import Dialog from "../../components/dialog/dialog";
import Link from "../../components/link/link";

import home from "./home.tml";
import "./home.scss";

class Home extends Block {
  constructor(props: Record<string, any> = {}) {
    if (isEmpty(store.getState())) {
      auth.getUserInfo();
      chat.getChats();
      console.log(store.getState());
    }

    // console.log('chat', chats)

    const search = new Search();
    const chatList = new ChatList();
    const dialog = new Dialog();
    const linkToProfile = new Link({
      text: "Профиль",
      className: "home__toProfile",
      events: {
        click: () => router.go("/profile"),
      },
    })

    super("div", {
      search,
      chatList,
      dialog,
      linkToProfile,
      ...props,
      ...store.getState(),
    });

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  render() {
    return this.setTemplate(home, this.props);
  }
}

export default Home;

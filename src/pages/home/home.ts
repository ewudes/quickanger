import Block from "../../utils/block";
import Search from '../../components/search/search';
import ChatList from '../../components/chatList/chatList';
import Dialog from '../../components/dialog/dialog';

import home from './home.tml';
import './home.scss'

class Home extends Block {
  constructor(props: Record<string, any> = {}) {
    const search = new Search();
    const chatList = new ChatList();
    const dialog = new Dialog();

    super("div", { search, chatList, dialog, ...props });
  }

  render() {
    return this.setTemplate(home, this.props);
  }
}

export default Home;

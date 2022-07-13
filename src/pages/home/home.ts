import home from './home.hbs';
import search from '../../components/search/search';
import chatList from '../../components/chatList/chatList';
import dialog from '../../components/dialog/dialog';
import './home.scss'

export default () => home({search, chatList, dialog});

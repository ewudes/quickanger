import auth from './auth.hbs';
import signUp from '../../components/authForm/signUp/signUp';
import signIn from '../../components/authForm/signIn/signIn';
import './auth.scss'

export default () => auth({signUp});

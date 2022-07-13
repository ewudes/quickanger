import auth from './auth.hbs';
import signUp from '../../components/authForm/signUp/signUp';
import signIn from '../../components/authForm/signIn/signIn';
import './auth.scss'

const loginPath = window.location.pathname === '/auth/login';
const registrationPath = window.location.pathname === '/auth/registration';

export default () => auth({signIn, signUp, loginPath, registrationPath});

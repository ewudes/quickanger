import signIn from './signIn.hbs';
import input from '../../input/input';
import '../authForm.scss'

export default () => signIn({
  login: input('login', 'Логин', 'text', 'ivanivanov', 'required'),
  password: input('password', 'Пароль', 'password', '*********', 'required'),
});

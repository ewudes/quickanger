import signIn from './signIn.hbs';
import input from '../../input/input';
import button from '../../button/button';
import '../authForm.scss'

export default () => signIn({
  login: input('login', 'Логин', 'text', 'ivanivanov', 'required', 'authForm__label', 'authForm__field'),
  password: input('password', 'Пароль', 'password', '*********', 'required', 'authForm__label', 'authForm__field'),
  submitBtn: button('Авторизоваться', 'primary', 'submit', 'authForm__submit'),
  signInBtn: button('Нет аккаунта?', 'primary', 'button', 'authForm__signIn')
});

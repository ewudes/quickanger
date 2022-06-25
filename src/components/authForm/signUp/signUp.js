import signUp from './signUp.hbs';
import input from '../../input/input';
import '../authForm.scss'

export default () => signUp({
  email: input('email', 'Почта', 'email', 'pochta@yandex.ru', 'required', 'authForm__label', 'authForm__field'),
  login: input('login', 'Логин', 'text', 'ivanivanov', 'required', 'authForm__label', 'authForm__field'),
  firstName: input('firstName', 'Имя', 'text', 'Иван', 'required', 'authForm__label', 'authForm__field'),
  lastName: input('lastName', 'Фамилия', 'text', 'Иванов', 'required', 'authForm__label', 'authForm__field'),
  phone: input('phone', 'Телефон', 'phone', '+7 (909) 967 30 30', 'required', 'authForm__label', 'authForm__field'),
  password: input('password', 'Пароль', 'password', '*********', 'required', 'authForm__label', 'authForm__field'),
  repeatPassword: input('password', 'Пароль (ещё раз)', 'password', '*********', 'required', 'authForm__label', 'authForm__field'),
  submitBtn: button('Зарегистрироваться', 'primary', 'submit', 'authForm__submit'),
  signInBtn: button('Войти', 'primary', 'button', 'authForm__signIn')
});

import signUp from './signUp.hbs';
import input from '../../input/input';
import '../authForm.scss'

export default () => signUp({
  email: input('email', 'Почта', 'email', 'pochta@yandex.ru', 'required'),
  login: input('login', 'Логин', 'text', 'ivanivanov', 'required'),
  firstName: input('firstName', 'Имя', 'text', 'Иван', 'required'),
  lastName: input('lastName', 'Фамилия', 'text', 'Иванов', 'required'),
  phone: input('phone', 'Телефон', 'phone', '+7 (909) 967 30 30', 'required'),
  password: input('password', 'Пароль', 'password', '*********', 'required'),
  repeatPassword: input('password', 'Пароль (ещё раз)', 'password', '*********', 'required'),
});

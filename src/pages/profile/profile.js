import profile from './profile.hbs';
import input from '../../components/input/input';
import button from '../../components/button/button';
import './profile.scss'

export default () => profile({
  email: input('email', 'Почта', 'email', 'pochta@yandex.ru', 'required', 'profile__label', 'profile__field'),
  login: input('login', 'Логин', 'text', 'ivanivanov', 'required', 'profile__label', 'profile__field'),
  firstName: input('firstName', 'Имя', 'text', 'Иван', 'required', 'profile__label', 'profile__field'),
  lastName: input('lastName', 'Фамилия', 'text', 'Иванов', 'required', 'profile__label', 'profile__field'),
  nickname: input('nickname', 'Имя в чате', 'text', 'Иван', 'required', 'profile__label', 'profile__field'),
  phone: input('phone', 'Телефон', 'phone', '+7 (909) 967 30 30', 'required', 'profile__label', 'profile__field'),
  btnSubmit: button('Изменить данные', 'primary', 'submit', 'profile__btnSubmit'),
  btnChangePass: button('Изменить пароль', 'primary', 'button', 'profile__btnChangePass'),
  btnClose: button('Выйти', 'danger', 'button', 'profile__btnClose')
});

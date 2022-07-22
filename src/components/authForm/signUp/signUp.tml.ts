import Handlebars from "handlebars";

const signUp = Handlebars.compile(
  `<form class="authForm">
    <h3 class="authForm__title">Зарегистрироваться</h3>
    <label class="authForm__label"> Почта {{{email}}} </label>
    <label class="authForm__label"> Логин {{{login}}} </label>
    <label class="authForm__label"> Имя {{{firstName}}} </label>
    <label class="authForm__label"> Фамилия {{{lastName}}} </label>
    <label class="authForm__label"> Телефон {{{phone}}} </label>
    <label class="authForm__label"> Пароль {{{password}}} </label>
    <label class="authForm__label"> Пароль (ещё раз) {{{repeatPassword}}} </label>
    {{{submitBtn}}}
    {{{signInBtn}}}
  </form>`
);

export default signUp;


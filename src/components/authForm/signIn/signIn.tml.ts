import Handlebars from "handlebars";

const signIn = Handlebars.compile(
  `<form class="authForm">
    <h3 class="authForm__title">Вход</h3>
    <label class="authForm__label"> Логин {{{login}}} </label>
    <label class="authForm__label"> Пароль {{{password}}} </label>
    {{{submitBtn}}}
    {{{signInBtn}}}
  </form>`
);

export default signIn;

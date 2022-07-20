import Handlebars from "handlebars";

const profile = Handlebars.compile(
  `<main class="profile">
    <form class="profile__form">
      <section class="profile__header">
        <a class="profile__pic" href="#"></a>
        <span class="profile__title">Иван</span>
      </section>
      <section class="profile__body">
        <label class="profile__label">Почта {{{email}}}</label>
        <label class="profile__label">Логин {{{login}}}</label>
        <label class="profile__label">Имя {{{firstName}}}</label>
        <label class="profile__label">Фамилия {{{lastName}}}</label>
        <label class="profile__label">Имя в чате {{{nickname}}}</label>
        <label class="profile__label">Телефон {{{phone}}}</label>
      </section>
      <section class="profile__footer">
        {{{btnSubmit}}}
        {{{btnChangePass}}}
        {{{btnClose}}}
      </section>
    </form>
    <div class="backTo">
      <button class="backTo__btn" type="button">Назад</button>
    </div>
  </main>`
);

export default profile;


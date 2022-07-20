import Handlebars from "handlebars";

const dialog = Handlebars.compile(
  `<div class="dialog">
    <header class="dialog__header">
      <div class="dialog__icon"></div>
      <div class="dialog__name">UserName</div>
      <div class="dialog__menu">
        <div class="dialog__menu-control"></div>
      </div>
    </header>
    <ul class="dialog__messages">
      {{#each msgs}}
        {{{msg}}}
      {{/each}}
    </ul>
    <form class="dialog__control">
      <div class="dialog__clip"></div>
      <label class="dialog__label">{{{messageInput}}}</label>
      {{{submitBtn}}}
    </form>
  </div>`
);

export default dialog;

import Handlebars from "handlebars";

const chat = Handlebars.compile(
  `<li class="chatList__item">
    <a class="chatList__avatar" href="#"></a>
    <div class="chatList__description">
      <a class="chatList__title" href="#">{{title}}</a>
      <p class="chatList__lastMessage">{{lastMessage}}</p>
    </div>
    <div class="chatList__common">
      <span class="chatList__date">{{date}}</span>
      {{#if badge}}
      <span class="chatList__badge">{{badge}}</span>
      {{/if}}
    </div>
  </li>`
);

export default chat;

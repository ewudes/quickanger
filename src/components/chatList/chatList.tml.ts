import Handlebars from "handlebars";

const chatList = Handlebars.compile(
  `<ul class="chatList">
    {{#each chats}}
      {{{chat}}}
    {{/each}}
  </ul>`
);

export default chatList;


import Handlebars from "handlebars";

const message = Handlebars.compile(
  `<li class="message {{className}}">{{text}}</li>`
);

export default message;

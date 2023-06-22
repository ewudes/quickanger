import Handlebars from "handlebars";

const link = Handlebars.compile(
  `<a class="{{className}}">{{text}}</a>`
);

export default link;

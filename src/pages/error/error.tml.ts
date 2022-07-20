import Handlebars from "handlebars";

const error = Handlebars.compile(
  `<main class="error">
    <h3 class="error__title">{{this.textError.0.status}}</h3>
    <span class="error__description">{{this.textError.0.description}}</span>
    {{{errorBtn}}}
  </main>`
);

export default error;

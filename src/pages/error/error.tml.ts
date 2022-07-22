import Handlebars from "handlebars";

const error = Handlebars.compile(
  `<main class="error">
    <h1 class="error__title">404</h1>
    <span class="error__description">Не туда попали</span>
    {{{errorBtn}}}
  </main>`
);

export default error;

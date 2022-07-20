import Handlebars from "handlebars";

const auth = Handlebars.compile(
  `<main class="auth">
    {{{signPage}}}
  </main>`
);

export default auth;


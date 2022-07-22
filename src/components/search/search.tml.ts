import Handlebars from "handlebars";

const search = Handlebars.compile(
  `<label class="search" for="search">
    <input class="search__input" name="search" type="text" placeholder="Поиск">
  </label>`
);

export default search;



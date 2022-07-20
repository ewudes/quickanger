import Handlebars from "handlebars";

const input = Handlebars.compile(
  `<input
      class="input {{classField}}"
      id="input"
      type="{{type}}"
      name="{{label}}"
      placeholder="{{placeholder}}"
      {{required}}
    >`
);

export default input;

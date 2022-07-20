 import Handlebars from "handlebars";

 const button = Handlebars.compile(
  `<button
    class="btn {{style}} {{className}}"
    type="{{type}}"
  >
    {{text}}
  </button>`
 );

 export default button;

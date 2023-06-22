import Handlebars from "handlebars";

const popup = Handlebars.compile(`
<div>
  <form class="{{ popupClass }}" id={{ popupId }}>
    <span name={{ name }}>{{ popupTitle }}</span>
    {{#each popupInputs}}
        {{{ input }}}
    {{/each}}
    {{{ popupButton }}}
    {{{ popupLink }}}
  </form>
</div>
`);

export default popup;

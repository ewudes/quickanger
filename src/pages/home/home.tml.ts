import Handlebars from "handlebars";

const home = Handlebars.compile(
  `<main class="home">
    <aside class="home__sidebar">
      {{{linkToProfile}}}
      {{{search}}}
      {{{chatList}}}
    </aside>
    <section class="home__chats">
      {{{dialog}}}
    </section>
  </main>`
);

export default home;


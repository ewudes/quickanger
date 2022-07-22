import Handlebars from "handlebars";

const home = Handlebars.compile(
  `<main class="home">
    <aside class="home__sidebar">
      <a class="home__toProfile">Профиль</a>
      {{{search}}}
      {{{chatList}}}
    </aside>
    <section class="home__chats">
      {{{dialog}}}
    </section>
  </main>`
);

export default home;


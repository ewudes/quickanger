import Block from "../../utils/block";
import { focus, blur, submit } from "../../utils/events";
import Input from "../input/input";
import Button from "../button/button";
import Message from "./message/message";

import dialog from "./dialog.tml";
import "./dialog.scss";

class Dialog extends Block {
  constructor(props: Record<string, any> = {}) {
    const messageInput = new Input({ label: "message", text: "", type: "text", placeholder: "Сообщение", required: "required", classLabel: "dialog__label", classField: "dialog__field", events: { focus: focus, blur: blur } });
    const submitBtn = new Button({ text: "Отправить", style: "submit", type: "submit", className: "dialog__submit", events: { click: submit } });
    const msgs = [
      {
        msg: new Message({
          className: 'mine',
          text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
        }),
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Здесь ваш текст...',
        }),
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
        }),
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
        }),
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
        }),
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Здесь ваш текст...',
        })
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
        }),
      },
      {
        msg: new Message({
          className: 'mine',
          text: 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
        }),
      },
      {
        msg: new Message({
          className: 'companion',
          text: 'Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
        })
      }
    ]

    super("div", { msgs, messageInput, submitBtn, ...props});
  }

  render() {
    return this.setTemplate(dialog, this.props);
  }
}

export default Dialog;

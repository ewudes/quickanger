import dialog from './dialog.hbs';
import input from '../input/input';
import button from '../button/button';
import message from './message/message';
import './dialog.scss'

export default () => dialog({
  messageInput: input('message', '', 'text', 'Сообщение', 'required', 'dialog__label', 'dialog__field'),
  submitBtn: button('Отправить', 'submit', 'submit', 'dialog__submit'),
  message: message(),
})

import button from './button.hbs';
import './button.scss';

export default(text, style, type, className) => {
  return button({text, style, type, className})
}

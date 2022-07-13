import button from './button.hbs';
import './button.scss';



export default(text: string, style: string, type: string, className: string) => {
  return button({text, style, type, className})
}

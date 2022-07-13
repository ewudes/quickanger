import error from './error.hbs';
import button from '../../components/button/button';
import './error.scss'

const textError = [
  {
    "status": "404",
    "description": "Не туда попали"
  },
  {
    "status": "500",
    "description": "Мы уже фиксим"
  }
]

export default () => error({
  textError,
  errorBtn: button('Назад к чатам', 'primary', 'button', 'error__btn'),
});

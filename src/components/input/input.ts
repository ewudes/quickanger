import input from './input.hbs';

export default(label, text, type, placeholder, required, classLabel, classField) => {
  return input({label, text, type, placeholder, required, classLabel, classField})
}

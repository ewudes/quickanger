import input from './input.hbs';

export default(label: string, text: string, type: string, placeholder: string, required: string, classLabel: string, classField: string) => {
  return input({label, text, type, placeholder, required, classLabel, classField})
}

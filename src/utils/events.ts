import Validation from "./validation";
import router from "./router";
import auth from "../controllers/auth";

const goToRegister = (event: Event): void => {
  if ((event.target as HTMLElement).className === "auth-form__link ") {
    router.go("/sign-up");
  }
};

const goToLogin = (event: Event): void => {
  if ((event.target as HTMLElement).className === "auth-form__link ") {
    router.go("/");
  }
};

const settingClick = (event: Event): void => {
  if (
    (event.target as HTMLElement).className === "auth-form__link account__back"
  ) {
    auth.logout();
  }
};

const focus = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  input.classList.remove("input_error");
};

const blur = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const verifyResult = Validation.verification(input.name, input.value);

  toggleErrorElement(input, verifyResult);
};

const signInBt = (event: Event) => {
  event.preventDefault();

  const data = validationForm();

  if (data) {
    auth.signIn(data);
  }
};

const signUpBt = (event: Event) => {
  event.preventDefault();

  const data = validationForm();

  if (data) {
    auth.signUp(data);
  }
};

const validationForm = (): Record<string, string> | void => {
  const data: Record<string, string> = {};
  const inputFields = document.querySelectorAll(".authForm__field");
  let validationError: number = 0;

  inputFields.forEach((input: any) => {
    const { verify } = Validation.verification(input.name, input.value);
    if (!verify) validationError++;

    data[input.name] = input.value;
  });

  if (validationError === 0) {
    if (document.querySelector('[name="repeat_password"]')) {
      if (!(data.password === data.repeat_password)) {
        const inputWrapper: any = document.querySelector(".input-wrapper");
        const div = document.createElement("div");
        div.setAttribute("class", "input__error_label");
        div.textContent = "Пароли не совпадают";
        inputWrapper.appendChild(div);
      } else {
        return data;
      }
    } else {
      return data;
    }
  } else {
    return undefined;
  }
};

const createErrorElement = (message: string): HTMLElement => {
  const div = document.createElement("div");
  div.setAttribute("class", "input__error_label");
  div.textContent = message;

  return div;
};

const toggleErrorElement = (
  target: HTMLInputElement,
  verifyResult: {
    verify: boolean;
    message: string;
  }
): void => {
  if (!verifyResult.verify) {
    target.classList.add("input_error");

    if (
      target.nextElementSibling === null ||
      (target.nextElementSibling !== null &&
        target.nextElementSibling.tagName !== "DIV")
    ) {
      const element = createErrorElement(verifyResult.message);
      target.after(element);
    }
  }

  if (
    target.nextElementSibling !== null &&
    target.nextElementSibling.tagName === "DIV" &&
    verifyResult.verify
  ) {
    target.nextElementSibling.remove();
  }
};

export {
  goToRegister,
  goToLogin,
  settingClick,
  focus,
  blur,
  signUpBt,
  signInBt,
  validationForm,
};

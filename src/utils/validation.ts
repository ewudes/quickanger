class Validation {
  private static FIELDS: Record<
    string,
    {
      pattern: RegExp;
      error: string;
      success: string;
    }
  > = {
    first_name: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
      error: "Некорректное имя",
      success: "Корректное имя",
    },
    second_name: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
      error: "Некорректная фамилия",
      success: "Корректная фамилия",
    },
    login: {
      pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
      error: "Некорректный логин",
      success: "Корректный логин",
    },
    email: {
      pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
      error: "Некорректный email",
      success: "Корректное email",
    },
    password: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
      error: "Некорректный пароль",
      success: "Корректный пароль",
    },
    repeat_password: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
      error: "Некорректный пароль",
      success: "Корректный пароль",
    },
    phone: {
      pattern: /^[+-d]?\d{10,15}$/,
      error: "Некорректный номер телефона",
      success: "Корректный номер телефона",
    },
    message: {
      pattern: /(.|\s)*\S(.|\s)*/,
      error: "Некорректно",
      success: "Корректно",
    },
  };

  static verification(inputName: string, inputValue: string) {
    const result: {
      verify: boolean;
      message: string;
    } = {
      verify: true,
      message: "",
    };

    const pattern = Validation.FIELDS[inputName].pattern;

    if (pattern.test(inputValue)) {
      result.message = Validation.FIELDS[inputName].success;
    } else {
      result.verify = false;
      result.message = Validation.FIELDS[inputName].error;
    }

    return result;
  }
}

export default Validation;

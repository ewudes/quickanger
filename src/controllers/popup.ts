import Block from "../utils/block";

import Input from "../components/input/input";
import Button from "../components/button/button";
import Link from "../components/link/link";
import Popup from "../components/popup/popup";

class PopupController {
  private innerInputs: Record<string, any>[] = [];
  private button: Button;
  private link: Link;

  public createPopup(props: Record<string, any>): Block {
    this.createInputs(props.inputs);
    this.createButton(props.button);
    this.createLink(props.link);

    return new Popup({
      popupId: props.id,
      popupClass: props.class,
      popupTitle: props.title,
      popupInputs: this.innerInputs,
      popupButton: this.button,
      popupLink: this.link,
    });
  }

  private createInputs(inputs: Record<string, any>[]) {
    inputs.forEach((input) => {
      this.innerInputs.push({
        input: new Input({
          classField: input.class,
          label: input.label,
          placeholder: input.placeholder,
          required: input.required,
          type: input.type,
        }),
      });
    }, []);
  }

  private createButton(props: Record<string, any>) {
    this.button = new Button({
      className: props.className,
      style: props.style,
      text: props.text,
      type: props.type,
      events: props.events,
    });
  }

  private createLink(props: Record<string, any>) {
    this.link = new Link({
      className: props.className,
      text: props.text,
      events: props.events,
    });
  }
}

export default PopupController;

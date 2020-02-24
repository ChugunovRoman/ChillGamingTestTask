import * as React from 'react';
import { Button, IconX } from '../../Elements';

interface ConfirmFormProps {
  title: string;
  text?: string;
  isOpen?: boolean;

  success(user: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  close(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

class ConfirmForm extends React.Component<ConfirmFormProps, Model.FrontUser> {
  props: ConfirmFormProps;
  state: Model.FrontUser;

  constructor(props: ConfirmFormProps) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__window">
          <div className="header">
            <h4 className="header__text text_invert">{this.props.title}</h4>
            <Button onClick={this.props.close} className="button_header margin_right_m" icon={<IconX />} />
          </div>

          <div className="form">
            {this.props.text ? <span>{this.props.text}</span> : null}

            <div className="form__buttons">
              <Button className="button_xl button_hover_green" onClick={this.props.success}>
                Yes
              </Button>
              <Button className="button_xl button_hover_red" onClick={this.props.close}>
                No
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmForm;

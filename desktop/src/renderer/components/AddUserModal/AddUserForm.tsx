import * as React from 'react';
import { Button, IconX, Input, DateCombo } from 'Elements';

interface AddUserFormProps {
  title: string;
  isOpen?: boolean;

  addUser(event: React.MouseEvent<HTMLDivElement> & Event): void;
  closeModal(event: React.MouseEvent<HTMLDivElement> & Event): void;
}
interface AddUserFormState {
  firstName: string;
  lastName: string;
  dob: Date;
  address: string;
}

class AddUserForm extends React.Component<AddUserFormProps, AddUserFormState> {
  props: AddUserFormProps;
  state: AddUserFormState;

  constructor(props: AddUserFormProps) {
    super(props);

    this.props = props;
    this.state = {
      firstName: '',
      lastName: '',
      dob: new Date(),
      address: '',
    };
  }

  private handleFirstName = (event: React.ChangeEvent<HTMLInputElement> & Event) => {
    this.state.firstName = event.target.value;
  };
  private handleLastName = (event: React.ChangeEvent<HTMLInputElement> & Event) => {
    this.state.lastName = event.target.value;
  };
  private handleDobName = (date: Date) => {
    console.log('==========================> date: ', date);
    this.state.dob = date;
  };
  private handleAddressName = (event: React.ChangeEvent<HTMLInputElement> & Event) => {
    this.state.address = event.target.value;
  };

  private successClose = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    console.log(this.state);

    // this.props.closeModal(event);
  };

  render() {
    return (
      <div className="modal">
        <div className="modal__window">
          <div className="header">
            <h4 className="header__text">{this.props.title}</h4>
            <Button onClick={this.props.closeModal} className="button_header margin_right_m" icon={<IconX />} />
          </div>

          <div className="form">
            <Input onChange={this.handleFirstName} width="auto" label="First name" type="text" />
            <Input onChange={this.handleLastName} width="auto" label="Last name" type="text" />
            <DateCombo onChange={this.handleDobName} label="Date of birth" />
            <Input onChange={this.handleAddressName} width="auto" label="Address" type="text" />

            <div className="form__buttons">
              <Button className="button_xl button_hover_green" onClick={this.successClose}>
                Add
              </Button>
              <Button className="button_xl button_hover_red" onClick={this.props.closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUserForm;

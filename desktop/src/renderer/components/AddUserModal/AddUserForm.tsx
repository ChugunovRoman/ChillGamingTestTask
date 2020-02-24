import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, IconX, Input, DateCombo } from '../../Elements';

interface AddUserFormProps {
  title: string;
  users?: Store.Users;
  isOpen?: boolean;

  addUser(user: Model.FrontUser): void;
  editUser(user: Model.User): void;
  closeModal(event: React.MouseEvent<HTMLDivElement> & Event): void;
}

@inject('users')
@observer
class AddUserForm extends React.Component<AddUserFormProps, Model.FrontUser> {
  props: AddUserFormProps;
  state: Model.FrontUser;

  constructor(props: AddUserFormProps) {
    super(props);

    this.props = props;
    this.state = this.props.users!.selectedUser
      ? this.props.users!.selectedUser
      : {
          firstName: '',
          lastName: '',
          dob: Date.now(),
          address: '',
        };
  }

  private handleFirstName = (event: React.ChangeEvent<HTMLInputElement> & Event) => {
    this.state.firstName = event.target.value;
  };
  private handleLastName = (event: React.ChangeEvent<HTMLInputElement> & Event) => {
    this.state.lastName = event.target.value;
  };
  private handleDobName = (date: number) => {
    this.state.dob = date;
  };
  private handleAddressName = (event: React.ChangeEvent<HTMLInputElement> & Event) => {
    this.state.address = event.target.value;
  };

  private addUser = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    this.props.addUser(this.state);

    this.props.closeModal(event);
  };
  private editUser = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    this.props.editUser(this.props.users!.selectedUser!);

    this.props.closeModal(event);
  };

  render() {
    return (
      <div className="modal">
        <div className="modal__window">
          <div className="header">
            <h4 className="header__text text_invert">{this.props.title}</h4>
            <Button onClick={this.props.closeModal} className="button_header margin_right_m" icon={<IconX />} />
          </div>

          <div className="form">
            <Input
              onChange={this.handleFirstName}
              value={this.state.firstName}
              width="auto"
              label="First name"
              type="text"
            />
            <Input
              onChange={this.handleLastName}
              value={this.state.lastName}
              width="auto"
              label="Last name"
              type="text"
            />
            <DateCombo onChange={this.handleDobName} value={this.state.dob} label="Date of birth" />
            <Input
              onChange={this.handleAddressName}
              value={this.state.address}
              width="auto"
              label="Address"
              type="text"
            />

            <div className="form__buttons">
              <Button
                className="button_xl button_hover_green"
                onClick={this.props.users!.selectedUser ? this.editUser : this.addUser}
              >
                {this.props.users!.selectedUser ? 'Save' : 'Add'}
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

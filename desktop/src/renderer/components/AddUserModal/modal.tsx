import * as React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children?: React.ReactNode;
}

class Modal extends React.Component<ModalProps, {}> {
  private modalRoot = document.getElementById('modal');
  private element: HTMLDivElement;
  props: ModalProps;

  constructor(props: ModalProps) {
    super(props);

    this.element = document.createElement('div');
    this.props = props;
  }

  componentDidMount() {
    this.modalRoot?.appendChild(this.element);
  }

  componentWillUnmount() {
    this.modalRoot?.removeChild(this.element);
  }
  render() {
    return createPortal(this.props.children, this.element);
  }
}

export default Modal;

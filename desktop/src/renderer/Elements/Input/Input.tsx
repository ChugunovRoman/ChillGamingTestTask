import * as React from 'react';

import './input.scss';

type inputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface InputProps {
  type?: inputType;
  value?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  width?: string;

  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FunctionComponent<InputProps> = props => {
  return (
    <div className={`input${props.className ? ` ${props.className}` : ''}`} style={{ width: props.width }}>
      {props.label ? <span className="input__label text_note">{props.label}</span> : null}
      <input
        className="input__field"
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onChange(e)}
      />
    </div>
  );
};

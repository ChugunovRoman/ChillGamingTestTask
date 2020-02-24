import * as React from 'react';

import './comboBox.scss';

interface ComboBoxProps {
  options: string[];
  selected?: number;
  className?: string;
  label?: string;
  width?: string;

  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export const ComboBox: React.FunctionComponent<ComboBoxProps> = props => {
  return (
    <div className={`combobox${props.className ? ` ${props.className}` : ''}`} style={{ width: props.width }}>
      {props.label ? <span className="combobox__label text_note">{props.label}</span> : null}
      <select defaultValue={props.selected} onChange={e => props.onChange(e)} className="combobox__select">
        {props.options.length > 0
          ? props.options.map((option, index) => {
              return (
                <option key={index} value={index}>
                  {option}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

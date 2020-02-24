import * as React from 'react';

import { ComboBox } from '..';
import './dateCombo.scss';

interface DateComboProps {
  value?: number;
  label?: string;
  startDate?: number;

  onChange(date: number): void;
}
interface DateComboState {
  currentDate: Date;
}

export class DateCombo extends React.Component<DateComboProps, DateComboState> {
  props: DateComboProps;
  state: DateComboState;

  constructor(props: DateComboProps) {
    super(props);

    this.props = props;
    this.state = {
      currentDate: props.value ? new Date(props.value) : new Date(),
    };
  }

  private getMonthDays = (month: number, year: number): string[] => {
    const days = new Date(year, month, 0).getDate();

    return [...Array(days).keys()].map(d => `${++d}`);
  };
  private getMonths = (): string[] => {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  };
  private getYears = (): string[] => {
    const years: string[] = [];
    const currentYear = new Date().getFullYear();

    let startYear = 1970;
    while (startYear <= currentYear) {
      years.push(`${startYear++}`);
    }

    return years.reverse();
  };

  private handleDay = (event: React.ChangeEvent<HTMLSelectElement> & Event) => {
    const date = this.state.currentDate;
    date.setDate(parseInt(event.target.value, 10) + 1);

    this.setState({
      currentDate: date,
    });

    this.props.onChange(this.state.currentDate.getTime());
  };
  private handleMonth = (event: React.ChangeEvent<HTMLSelectElement> & Event) => {
    const date = this.state.currentDate;
    const currentDays = this.getMonthDays(date.getMonth() + 1, date.getFullYear());
    const newMonthDays = this.getMonthDays(parseInt(event.target.value, 10) + 1, date.getFullYear());

    if (currentDays.length > newMonthDays.length) {
      date.setDate(1);
      date.setMonth(parseInt(event.target.value, 10));
    } else {
      date.setMonth(parseInt(event.target.value, 10));
    }

    this.setState({
      currentDate: date,
    });

    this.props.onChange(this.state.currentDate.getTime());
  };
  private handleYear = (event: React.ChangeEvent<HTMLSelectElement> & Event) => {
    const date = this.state.currentDate;
    date.setFullYear(this.getYears()[event.target.value]);

    this.setState({
      currentDate: date,
    });

    this.props.onChange(this.state.currentDate.getTime());
  };

  render() {
    let yearIndex = this.getYears().findIndex(y => +y === this.state.currentDate.getFullYear());

    return (
      <div className="datecombo">
        {this.props.label ? <span className="datecombo__label text_note">{this.props.label}</span> : null}
        <ComboBox
          onChange={this.handleDay}
          className="padding_right_l"
          width="50px"
          selected={new Date(this.state.currentDate).getDate() - 1}
          options={this.getMonthDays(this.state.currentDate.getMonth() + 1, 2020)}
        />
        <ComboBox
          onChange={this.handleMonth}
          selected={this.state.currentDate.getMonth()}
          className="padding_right_l"
          width="150px"
          options={this.getMonths()}
        />
        <ComboBox onChange={this.handleYear} width="70px" selected={yearIndex} options={this.getYears()} />
      </div>
    );
  }
}

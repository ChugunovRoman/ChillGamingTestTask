import * as React from 'react';
import UserList from './UserList';

class App extends React.Component<{}, {}> {
  props: {};

  constructor(props: {}) {
    super(props);

    this.props = props;
  }

  render() {
    return <UserList />;
  }
}

export default App;

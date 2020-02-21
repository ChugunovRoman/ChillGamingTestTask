import * as React from 'react';

class App extends React.Component<{}, {}> {
  props: {};

  constructor(props: {}) {
    super(props);

    this.props = props;
  }

  render() {
    return <div>Hello Electron!</div>;
  }
}

export default App;

import * as React from 'react';
import { Global } from '@emotion/core';
import {
  IconButton,
  Button,
  Text,
  DarkMode,
  Container,
  generateColorsFromScales,
  ThemeProvider,
  defaultTheme,
} from 'sancho';

import UserList from './UserList';

const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
  },
};

class App extends React.Component<{}, {}> {
  props: {};

  constructor(props: {}) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Global
            styles={{
              body: {
                padding: 0,
                margin: 0,
              },
            }}
          />
          <UserList />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

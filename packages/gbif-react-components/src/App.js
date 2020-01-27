import React from 'react';
import Root from './styles/Root';
import { Level, Button } from './components';
import { ThemeProvider } from 'emotion-theming'
import dark from './styles/themes/dark';
import themeBuilder from './themeBuilder';
const theme = themeBuilder(dark);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Button type='primary'>test</Button>
        <Level style={{ padding: 20 }}>
          <Level.Item>item 1</Level.Item>
          <Level.Item>Item 2</Level.Item>
        </Level>
      </Root>
    </ThemeProvider>
  );
}

export default App;

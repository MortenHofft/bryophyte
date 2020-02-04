import React from 'react';
import Root from './components/Root';
import { OccurrenceSearch } from './components';
import { ThemeProvider } from 'emotion-theming'
import { IntlProvider } from "react-intl";
import en from "./components/search/OccurrenceSearch/locales/en";
import light from './styles/themes/light';
import themeBuilder from './themeBuilder';
const theme = themeBuilder(light);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale='en' messages={en.messages}>
        <Root>
          <OccurrenceSearch style={{ height: '100vh' }}></OccurrenceSearch>
        </Root>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;

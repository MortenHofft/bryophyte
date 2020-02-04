import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import PropTypes from "prop-types";

import OccurrenceSearch from "./OccurrenceSearch";
import en from "./locales/en";

class Standalone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: this.getTheme(),
      ...this.getLocaleData()
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):O
    if (this.props.theme !== prevProps.theme) {
      this.setState({ theme: this.getTheme() });
    }
    if (this.props.locale !== prevProps.locale) {
      this.setState({ ...this.getLocaleData() });
    }
  }

  getTheme() {
    // Merged the default config with the user provided one
    return Object.assign({}, defaultTheme, this.props.theme);
  }

  getLocaleData() {
    const locale = this.props.locale === "en" ? en : this.props.locale;
    const { intl, messages, locale: localeName } = locale;
    addLocaleData([...intl]);
    return { messages, locale: localeName };
  }

  render() {
    const { settings } = this.props;

    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        {/* <ThemeProvider theme={this.state.theme}> */}
          <OccurrenceSearch settings={settings} />
        {/* </ThemeProvider> */}
      </IntlProvider>
    );
  }
}

Standalone.propTypes = {
  theme: PropTypes.object,
  settings: PropTypes.object,
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Standalone;

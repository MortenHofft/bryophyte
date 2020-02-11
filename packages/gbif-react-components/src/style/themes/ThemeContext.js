import React from 'react';
import themeVariables from './dark';
import themeBuilder from '../themeBuilder';

const theme = themeBuilder(themeVariables);

// A context to share state for the full app/component
export default React.createContext(theme);
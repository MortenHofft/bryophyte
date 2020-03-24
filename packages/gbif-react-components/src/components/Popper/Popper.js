/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import Box from '../Box/Box';
import styles from './styles';

export class Popper extends React.Component {
  constructor(props) {
    super(props);
    const {trigger, content} = props;
    this.triggerRef = React.createRef();
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    this.popperInstance = createPopper(this.triggerRef.current, this.contentRef.current, {
      onFirstUpdate: state => console.log('Popper positioned on', state.placement),
      placement: 'top'
    });
  }

  componentWillUnmount() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      this.scheduleUpdate();
    }
  }

  scheduleUpdate = () => {
    console.log('update');
    if (this.popperInstance) {
      this.popperInstance.update();
    }
  };

  render() {
    const {trigger, content} = this.props;
    return (
      <>
        {React.cloneElement(trigger, {ref: this.triggerRef})}
        <div ref={this.contentRef}>
          {this.props.visible && content}
        </div>
      </>
    )
  }
}


import React from "react";
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Level from '../../layout/Level';
import { Button } from '../../components/Button';

const Footer = ({ onApply, onCancel, onBack, showBack = false, formId }) => {
  return <Level className={footer}>
  <Level.Left>
    <Level.Item>
      {showBack && <Button appearance="ghost" onClick={onBack}>Back</Button>}
      {!showBack && <Button appearance="ghost" onClick={onCancel}>Cancel</Button>}
    </Level.Item>
  </Level.Left>
  <Level.Right>
    <Level.Item>
      {!showBack && <Button type="submit" form={formId} onClick={onApply}>Apply</Button>}
    </Level.Item>
  </Level.Right>
</Level>
}

Footer.propTypes = {
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  onBack: PropTypes.func,
  showBack: PropTypes.bool,
  formId: PropTypes.string
};

const footer = css`
  padding: .8em 1em;
  flex: 0 0 auto;
`;

export default Footer;
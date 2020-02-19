import React from "react";
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Level from '../../layout/Level';
import { Checkbox } from '../../components/Checkbox';

const Option = React.forwardRef(({ label, checked, onChange, helpText, helpVisible}, ref) => {
  return <Level as={'label'} className={optionClass} >
    <Level.Left style={{ alignItems: 'flex-start' }}>
      <Level.Item>
        <div>
          <Checkbox ref={ref} checked={checked} onChange={onChange} />
        </div>
      </Level.Item>
      <Level.Item>
        <div>
          <div>{label}</div>
          {helpVisible && helpText && <div style={{ marginTop: 4, fontSize: '0.85em', color: '#aaa' }}>
            {helpText}
          </div>}
        </div>
      </Level.Item>
    </Level.Left>
  </Level>
});

Option.propTypes = {
  label: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  helpText: PropTypes.node,
  helpVisible: PropTypes.bool,
  rover: PropTypes.object,
};

Option.displayName = 'FilterOption';

const optionClass = css`
  padding: 6px 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Option;


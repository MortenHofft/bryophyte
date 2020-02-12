import { css, cx } from 'emotion';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const Box = React.forwardRef(({
  as: Bx,
  className,
  ...props
}, ref) => {
  const theme = useContext(ThemeContext);
  return <Bx ref={ref} className={cx(box(theme), className)} {...props}>
  </Bx>
});

Box.displayName = 'Box'

Box.defaultProps = {
  as: 'div'
}

const box = theme => css`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: ${theme.fontFamily};
`;

export default Box;
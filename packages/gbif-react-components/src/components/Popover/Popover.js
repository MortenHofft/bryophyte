import React from "react";
import { css, cx } from 'emotion';
import {
  usePopoverState,
  Popover as BasePopover,
  PopoverDisclosure,
  PopoverArrow
} from "reakit/Popover";

function Popover({ trigger, modal, placement, visible, className, ...props }) {
  const popover = usePopoverState({ placement: placement || "bottom", visible: visible });
  return (
    <>
      <PopoverDisclosure {...popover} {...trigger.props}>
        {disclosureProps => React.cloneElement(trigger, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popover} {...props}>
        {props => popover.visible &&
          <div {...props} className={cx(dialog, className)}>
            <PopoverArrow className="arrow" {...popover} />
            <div className={dialogContent}>
              {React.cloneElement(modal(popover))}
            </div>
          </div>
        }
      </BasePopover>
    </>
  );
}

const dialogContent = css`
  padding: 1em;
  max-height: calc(100vh - 56px);
  overflow: auto;
`;

const dialog = css`
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(33, 33, 33);
  z-index: 999;
  border-radius: 0.25rem;
  outline: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.25);
  border-image: initial;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1000px 1000px;
  &:focus {
    box-shadow: 0 0 0 0.2em blue;
  }
  & > .arrow {
    background-color: transparent;
    & .stroke {
      fill: rgba(33, 33, 33, 0.25);
    }
    & .fill {
      fill: white;
    }
  }
`;

export default Popover;
// For now we use Reakit as the functional components that handles focus and aria attributes, but https://reacttraining.com/reach-ui/ could also be an option. 
// Reakit seems nicer, but is in Beta and have poor support for RTL. Reach on the other hand seem to skimp on ARIA despite it being their primary focus. At least the implementations are not clearly inline with recommendations. But in general A11y seems an area with little tru/false but mostly just opinions. Surprisingly so.

import React from "react";
import { css, cx } from 'emotion';
import {
  usePopoverState,
  Popover as BasePopover,
  PopoverDisclosure,
  PopoverArrow,
  PopoverBackdrop
} from "reakit/Popover";

function Popover({ trigger, modal, placement, visible, className, onClose, ...props }) {
  const popover = usePopoverState({ placement: placement || "bottom-start", visible: visible, modal: false });
  const ref = React.useRef();

  React.useEffect(() => {
    if (popover.visible) {
      if (ref && ref.current) {
        ref.current.focus();
      }
    } else if (onClose){
      onClose(popover);
    }
  }, [popover.visible]);

  return (
    <>
      <PopoverDisclosure {...popover} {...trigger.props}>
        {disclosureProps => React.cloneElement(trigger, disclosureProps)}
      </PopoverDisclosure>
      <PopoverBackdrop {...popover} className={backdrop} onClick={e => onClose ? onClose(popover) : undefined}></PopoverBackdrop>
      <BasePopover {...popover} {...props}>
        {props => popover.visible &&
          <div {...props} className={cx(dialog, className)}>
            <PopoverArrow className="arrow" {...popover} />
            <div className={dialogContent}>
              {React.cloneElement(modal(popover, ref))}
            </div>
          </div>
        }
      </BasePopover>
    </>
  );
}

const backdrop = css`
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 999;
`;

const dialogContent = css`
  max-height: calc(100vh - 100px);
  /* overflow: auto; */
`;

const dialog = css`
  background-color: rgb(255, 255, 255);
  /* position: fixed; */
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  border-radius: 4px;
  outline: 0px;
  border: 1px solid rgba(33, 33, 33, 0.25);
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1000px 1000px; */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
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
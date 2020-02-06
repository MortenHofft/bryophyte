import React from "react";
import { css, cx } from 'emotion';
import styled from '@emotion/styled'
import Popover from '/components/Popover/Popover';
import { Button } from 'components/Button';
import Level from 'layout/Level';
import { MdMoreVert } from "react-icons/md";

function BasisOfRecord({ stateApi, ...props }) {

  const popupContent = props => <div className={filter}>
    <Level as="section" className={header}>
      <Level.Left>
        <Level.Item>
          Basis of record
        </Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item>
          <MdMoreVert style={{ fontSize: 30 }} />
        </Level.Item>
      </Level.Right>
    </Level>
    <div className={cx(body, scrollBox)}>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
      <p>aaa</p>
      <p>bbb</p>
    </div>
    <Level className={footer}>
      <Level.Left>
        <Level.Item>
          <Button appearance="ghost" onClick={e => props.hide()}>Cancel</Button>
        </Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item>
          <Button>Apply</Button>
        </Level.Item>
      </Level.Right>
    </Level>
  </div>

  return (
    <Popover
      style={{ width: 400, maxWidth: '100%' }}
      visible
      aria-label="Filter on basis of record"
      modal={popupContent}
      trigger={<Button>Basis of record</Button>}
    />
  );
}

const filter = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: inherit;
`;

const header = css`
  border-bottom: 1px solid #eee;
  padding: 1em;
  flex: 0 0 auto;
`;

const body = css`
  border-bottom: 1px solid #eee;
  padding: 1em;
  flex: 1 1 auto;
  overflow: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
      width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #686868;
  }
`;

const footer = css`
  padding: 1em;
  flex: 0 0 auto;
`;

const scrollBox = css`
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    
    /* Shadows */
    radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    
    /* Shadows */
    radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;

export default BasisOfRecord;
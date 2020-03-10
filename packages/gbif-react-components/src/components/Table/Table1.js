/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { MdLock, MdLockOpen, MdChevronRight, MdChevronLeft, MdFirstPage, MdMoreVert } from "react-icons/md";
import { TextButton as Action, Row, Col } from '../index';
import styles from './styles';

export const Th = ({ children, width, toggle, locked, ...rest }) => (
  <th {...rest}>
    <span css={styles[width] ? styles[width]() : ''}>{children} {toggle && <Action onClick={toggle}>
      {locked ? <MdLock /> : <MdLockOpen />}
    </Action>}</span>
  </th>
);

export const Td = ({ children, width, ...rest }) => (
  <td {...rest}>
    <span css={styles[width] ? styles[width]() : ''}>{children}</span>
  </td>
);

class Table extends Component {
  constructor(props) {
    super(props);

    this.bodyScroll = this.bodyScroll.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.myRef = React.createRef();
    this.state = {};
  }

  bodyScroll() {
    // const nearEnd = Math.abs(this.myRef.current.offsetWidth + this.myRef.current.scrollLeft - this.myRef.current.scrollWidth) < 20;
    this.setState({ scrolled: this.myRef.current.scrollLeft !== 0 });
  }

  handleShow(field) {
    this.setState({ showModalFilter: true, modalField: field });
  }

  handleHide() {
    this.setState({ showModalFilter: false });
  }

  render() {
    const { children, first, prev, next, size, from, total, fixedColumn, style } = this.props;

    const page = 1 + Math.floor(from / size);
    const totalPages = Math.ceil(total / size);
    return (
      <React.Fragment>
        <div css={styles.wrapper()} style={style}>
          <div
            css={styles.occurrenceTable()}
            onScroll={this.bodyScroll}
            ref={this.myRef}
          >
            <table
              css={styles.table({ stickyColumn: fixedColumn, scrolled: this.state.scrolled && fixedColumn })}
            >
              {children}
            </table>
          </div>
          <div css={styles.footer()}>
            {page > 2 && <Action css={styles.footerItem()} direction="right" tip="first" onClick={first}>
              <MdFirstPage />
            </Action>}
            {page > 1 && <Action css={styles.footerItem()} direction="right" tip="previous" onClick={prev}>
              <MdChevronLeft />
            </Action>}
            <span css={styles.footerText()}>
              <FormattedMessage
                id='pagination.pageXofY'
                defaultMessage={'Loading'}
                values={{ current: <FormattedNumber value={page}/>, total: <FormattedNumber value={totalPages}/> }}
              />
            </span>
            {page !== totalPages && <Action css={styles.footerItem()} direction="left" tip="next" onClick={next}>
              <MdChevronRight />
            </Action>}
            <Action css={styles.footerItem()} direction="left" tip="options">
              <MdMoreVert />
            </Action>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Table.propTypes = {
  children: PropTypes.any,
  first: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
  size: PropTypes.number,
  from: PropTypes.number,
  total: PropTypes.number,
  fixedColumn: PropTypes.bool,
  style: PropTypes.object
}
export default Table;

export const Example = () => {
  const [fixedColumn, setFixed] = useState(true);

  const getRows = () => {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(row => {
      const cells = ['gbifScientificName', 'year', 'basisOfRecord', 'datasetTitle', 'publisherTitle', 'countryCode', 'gbifTaxonRank'].map(
        (field, i) => {
          if (i === 0) {
            return <Td key={field}>
              <Action onClick={() => console.log(row)}>{field}_{row}</Action>
            </Td>
          } else {
            return <Td key={field}>{field}_{row}</Td>;
          }
        }
      );
      return <tr key={row}>{cells}</tr>;
    });
    return rows;
  }

  const headers = [
    <Th key='scientificName' width='wide' locked={fixedColumn} toggle={() => setFixed(!fixedColumn)}>
      scientificName
    </Th>,
    <Th key='year'>
      year
    </Th>,
    <Th key='basisOfRecord' width='wide'>
      basisOfRecord
    </Th>,
    <Th key='datasetTitle' width='wide'>
      datasetTitle
    </Th>,
    <Th key='publisherTitle' width='wide'>
      publisherTitle
    </Th>,
    <Th key='countryCode'>
      countryCode
    </Th>,
    <Th key='gbifTaxonRank'>
      rank
    </Th>
  ];

  const first = () => { };
  const prev = () => { };
  const next = () => { };
  const size = 10;
  const from = 20;
  const total = 1000000;
  return <Table fixedColumn={fixedColumn} {...{ first, prev, next, size, from, total }} style={{ height: 300 }}>
    <thead>
      <tr>{headers}</tr>
    </thead>
    <tbody>
      {getRows()}
    </tbody>
  </Table>
}



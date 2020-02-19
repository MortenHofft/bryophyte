import React, { useState, useEffect } from "react";
import { css, cx } from 'emotion';
import Header from './Header';
import Footer from './Footer';
import SummaryBar from './SummaryBar';
import Option from './Option';
import { MenuAction, MenuToggle } from '../../components/Menu';

/*
  How would I like to use it

  it just takes whatever filter context it is in - or could take it explicitly
  
  in general the filters could be used as
  <TaxonFilter onApply onCancel innerRef defaultFilter/>

  Those filters could be composed by filter util components. 
  say header, footer and some general state mngment

  const filter = useFilter();

  <Filter>
    <Header {...filter} title/>
    
    <Suggest onChange={val => filter.dispath('ADD', {field, val})}/>
    <Summary {...filter} />
    <Checkbox onChange={e => filter.dispath('TOGGLE', {field, value})}

    <Footer {...filter} />
  </Filter>


  <Filter>
    <Header options={menuState => []}>
      title goes here
    </Header>

    <Body>
      <Search>
      <Tools>
      <Selection>
    </Body>
    <Footer onApply onCancel/>
  </Filter>
*/
function Filter() {

}

const log = console.log;

const Example = props => {
  const [count, setCount] = useState(0);

  return <div>
    <Header menuItems={menuState => [
      ...count > 3 ? [<MenuAction onClick={e => menuState.hide()}>Only show if count above 3</MenuAction>] : [],
      <MenuToggle>Show help texts</MenuToggle>
    ]}>
      Title goes here
    </Header>
    <SummaryBar count={count} onClear={e => setCount(0)} />
    <div>
      <Option helpVisible={true} helpText="some help text" label="Human observation" />
      <Option helpVisible={true} helpText="some help text" label="Human observation" />
      <Option helpVisible={true} helpText="some help text" label="Human observation" />

    </div>
    <Footer
      onApply={e => setCount(count + 1)}
      onCancel={e => log('cancel')}
      onBack={e => log('goBack')}
    />
  </div>
}


export default Example;
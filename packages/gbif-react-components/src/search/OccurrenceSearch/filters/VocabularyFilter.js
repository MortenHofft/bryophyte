import React, { useState, useContext, useEffect } from "react";
import { css, cx } from 'emotion';
import Popover from '../../../components/Popover/Popover';
import { Button } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { Prose } from '../../../typography/Prose';
import Level from '../../../layout/Level';
import { MdMoreVert } from "react-icons/md";
import nanoid from 'nanoid';
import FilterState from './state/FilterState';
import FilterContext from './state/FilterContext';
import { get, keyBy } from 'lodash';
import { Menu, MenuAction, MenuToggle } from '../../../components/Menu';
import formatters from '../displayNames/formatters';
import { Rover, useRoverState } from '../../../components/Rover';
import { getVocabulary } from './getVocabulary';


function VocabularyFilter({ vocabularyName, placement, ...props }) {
  const [id] = React.useState(nanoid);
  const currentFilterContext = useContext(FilterContext);
  const [tmpFilter, setFilter] = useState(currentFilterContext.filter);
  const [vocabulary, setVocabulary] = useState(false);
  const [isAboutVisible, showAbout] = useState(false);
  const [help, showHelp] = useState(false);
  const rover = useRoverState();

  useEffect(() => {
    setFilter(currentFilterContext.filter);
  }, [currentFilterContext.filter]);

  getVocabulary(vocabularyName, 'eng').then(v => setVocabulary(v)).catch(err => console.error(err));

  const popupContent = (popover, ref) => <FilterState filter={tmpFilter} onChange={updatedFilter => setFilter(updatedFilter)}>
    <FilterContext.Consumer>
      {({ setField, toggle, filter }) => {
        const checkedMap = new Set(get(filter, `must.${vocabularyName}`, []));
        return <div className={filterClass}>
          <Level as="section" className={header}>
            <Level.Left>
              <Level.Item>
                {vocabulary && vocabulary.label}
              </Level.Item>
            </Level.Left>
            {(vocabulary.definition || vocabulary.hasConceptDefinitions) && <Level.Right>
              <Level.Item>
                <Menu
                  aria-label="Custom menu"
                  // trigger={<Button>Custom menu</Button>}
                  trigger={<Button appearance="text"><MdMoreVert style={{ fontSize: 24 }} /></Button>}
                  items={menuState => [
                    ...vocabulary.definition ? [<MenuAction onClick={e => { showAbout(true); menuState.hide() }}>About this filter</MenuAction>] : [],
                    ...vocabulary.hasConceptDefinitions ? [<MenuToggle disabled={isAboutVisible} style={{ opacity: isAboutVisible ? .5 : 1 }} checked={help} onChange={e => showHelp(!help)}>Show help texts</MenuToggle>] : []
                  ]}
                />
              </Level.Item>
            </Level.Right>}
          </Level>
          {!isAboutVisible && vocabulary &&
            <>
              <Level as="div" className={infoHeader}>
                <Level.Left>
                  <Level.Item>
                    {checkedMap.size} selected
              </Level.Item>
                </Level.Left>
                {checkedMap.size > 0 &&
                  <Level.Right>
                    <Level.Item>
                      <Button appearance="text" onClick={e => setField(vocabulary.name, [])}>Clear</Button>
                    </Level.Item>
                  </Level.Right>
                }
              </Level>
              <form className={cx(body, scrollBox)} id={id} onSubmit={e => e.preventDefault()} >
                {vocabulary && vocabulary.concepts.map((concept, index) => {
                  return <Level as={'label'} key={concept.name} className={optionClass} >
                    <Level.Left style={{ alignItems: 'flex-start' }}>
                      <Level.Item>
                        <div>
                          <Rover as={Checkbox} {...rover} ref={index === 0 ? ref : null} checked={checkedMap.has(concept.name)} onChange={e => toggle(vocabulary.name, concept.name)} >
                          </Rover>
                        </div>
                      </Level.Item>
                      <Level.Item>
                        <div>
                          <div>{concept.label}</div>
                          {help && concept.definition && <div style={{ marginTop: 4, fontSize: '0.85em', color: '#aaa' }}>
                            {concept.definition}
                          </div>}
                        </div>
                      </Level.Item>
                    </Level.Left>
                  </Level>
                })}
              </form>
            </>
          }
          {isAboutVisible &&
            <Prose className={cx(body, scrollBox, description)}>
              {vocabulary.definition}
            </Prose>
          }
          <Level className={footer}>
            <Level.Left>
              <Level.Item>
                {isAboutVisible && <Button appearance="ghost" onClick={e => showAbout(false)}>Back</Button>}
                {!isAboutVisible && <Button appearance="ghost" onClick={e => { setFilter(currentFilterContext.filter); popover.hide(); }}>Cancel</Button>}
              </Level.Item>
            </Level.Left>
            <Level.Right>
              <Level.Item>
                {!isAboutVisible && <Button type="submit" form={id} onClick={e => { currentFilterContext.setFilter(filter); popover.hide(); }}>Apply</Button>}
              </Level.Item>
            </Level.Right>
          </Level>
        </div>
      }}
    </FilterContext.Consumer>
  </FilterState>

  return (
    <Popover
      style={{ width: 400, maxWidth: '100%' }}
      onClose={e => currentFilterContext.setFilter(tmpFilter)}
      aria-label={`Filter on ${vocabularyName}`}
      modal={popupContent}
      placement={placement}
      trigger={<FilterButton {...props} vocabulary={vocabulary} filter={currentFilterContext.filter}></FilterButton>}
    />
  );
}

const FilterButton = React.forwardRef(({ filter, vocabulary, ...props }, ref) => {
  if (!vocabulary) return <Button appearance="primaryOutline" ref={ref} loading={true}>Loading</Button>

  const appliedFiltersSet = new Set(get(filter, `must.${vocabulary.name}`, []));
  if (appliedFiltersSet.size === 1) {
    const selected = keyBy(vocabulary.concepts, 'name')[filter.must[vocabulary.name][0]].label;
    return <Button {...props} ref={ref}>{selected}</Button>
  }
  if (appliedFiltersSet.size > 1) {
    return <Button {...props} ref={ref} loading={!vocabulary}>{appliedFiltersSet.size} {vocabulary.label}s</Button>
  }
  return <Button appearance="primaryOutline" {...props} ref={ref} loading={!vocabulary}>{vocabulary.label}</Button>
});

const optionClass = css`
  padding: 6px 0;
  &:last-child {
    margin-bottom: 0;
  }
  /* & *::selection {
    color: none;
    background: none;
  } */
`;

const description = css`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const infoHeader = css`
  font-size: .85em;
  color: #999;
  padding: .5em 1.5em;
  font-weight: 200;
`;

const filterClass = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: inherit;
`;

const header = css`
  border-bottom: 1px solid #eee;
  padding: 1.2em 1.5em;
  flex: 0 0 auto;
`;

const body = css`
  /* border-bottom: 1px solid #eee; */
  padding: .5em 1.5em;
  flex: 1 1 auto;
  overflow: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
      width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #686868;
  }
`;

const footer = css`
  padding: .8em 1em;
  flex: 0 0 auto;
`;

// https://stackoverflow.com/questions/9333379/check-if-an-elements-content-is-overflowing
// I would never have thought of this myself.
const scrollBox = css`
  /* background: */
    /* Shadow covers */
    /* linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%, */
    
    /* Shadows */
    /* radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%; */
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    
    /* Shadows */
    linear-gradient(to bottom, #eee 1px, transparent 1px 100%),
    /* linear-gradient(to bottom, #eee 1px, transparent 6px 100%), */
    linear-gradient(to bottom, transparent calc(100% - 1px), #eee calc(100% - 1px) 100%);
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 10px, 100% 10px, 100% 20px, 100% calc(100% - 1px);
  
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;

export default VocabularyFilter;
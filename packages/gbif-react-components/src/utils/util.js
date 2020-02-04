export const getClasses = (theme, elementName, classes) => {
  const classesToApply = [];
  const prefix = theme.prefix || 'gbif';

  Object.keys(classes).forEach(key => {
    const val = classes[key];
    if (val === true) {
      classesToApply.push(key);
    } else if(typeof val === 'string') {
      classesToApply.push(val);
    }
  });
  const humanClasses = getClassNames(prefix, elementName, classesToApply);
  return { humanClasses, classesToApply};
}

const getClassNames = (prefix, elementName, classes) => {
  const root = `${prefix}-${elementName}`;
  return classes.reduce((a, c) => `${a} ${root}-${c}`, `${root}`);
}

export const isEmpty = obj => Object.entries(obj).length === 0 && obj.constructor === Object;
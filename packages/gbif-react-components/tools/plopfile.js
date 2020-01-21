const path = require('path');

// Plop documentation https://plopjs.com/documentation/#getting-started
module.exports = function (plop) {
  // create generators here
  plop.setGenerator('component', {
    description: 'Add a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
        validate(value) {
          if (typeof value === 'string' && value.length > 0) return true;
          return 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        ),
        templateFile: 'plop-templates/components/component.hbs',
      },
      {
        type: 'modify',
        path: path.resolve('./src/components/index.js'),
        pattern: /(\/\/ -- Add imports above this line \(required by plopfile\.js\) --)/gi,
        template: `export { {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';\r\n$1`,
      }
    ]
  });
};
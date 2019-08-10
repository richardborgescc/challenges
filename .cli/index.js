const jest = require('jest');
const chalk = require('chalk');
var intercept = require('intercept-stdout');
intercept(txt => {
  if (txt.indexOf('Determining test suites to run') > -1) {
    return '';
  } else if (txt.indexOf('.spec.js') > -1) {
    txt = txt.replace('.spec.js', '');
    txt = txt.replace('tests/', '');
    txt = txt.replace('desafio', 'Desafio ');
  }

  return txt;
});
var argv = require('minimist')(process.argv.slice(2));
process.env.TESTS_PATH = argv.path || '';
const options = {
  reporters: argv.debug ? ['default'] : [],
  noStackTrace: true,
  noCache: true,
  verbose: false,
  silent: true
};
console.log(chalk.bold('Validando desafios...'));
jest
  .runCLI(options, ['./'])
  .then(({ results }) => {
    const total = results.numPassedTests / results.numTotalTests;
    const points = (total * 100).toFixed(0);
    console.log(chalk.bold.green(`Pontos:      ${points}`));
  })
  .catch(failure => {
    console.error(failure);
  });

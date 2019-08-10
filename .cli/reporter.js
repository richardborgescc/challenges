const argv = require('minimist')(process.argv.slice(2));

class Reporter {
  onRunComplete(test, results) {
    const { author } = require(`${argv.path}/package.json`);
    if (!author) {
      console.error(
        'Defina o seu nome no parametro "author" dentro do arquivo package.json'
      );
    }
    const total = results.numPassedTests / results.numTotalTests;
    const points = (total * 100).toFixed(0);
    console.log(`\n\n${author}`);
    console.log(`Pontos: ${points}`);
  }
}

module.exports = Reporter;

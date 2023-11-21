const chalk = require('chalk');

const wilderNames = ["Sihem", "Mike", "Mattias",];

wilderNames.forEach((name, index) => {
    const coloredName = chalk.keyword(['red', 'green', 'blue'][index])(name);
    console.log(`Collègue ${index + 1}: ${coloredName}`);
  });

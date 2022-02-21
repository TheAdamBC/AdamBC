const inquirer = require('inquirer');
//const chalk = require("chalk");

module.exports = {
  askToDelete: () => {
    return inquirer.prompt({
        name: 'answer',
        type: 'confirm',
        message: 'Are you sure you want to delete this DApp? Y for YES or N for NO'
      });
  },
};


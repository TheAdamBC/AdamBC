#!/usr/bin/env node

const {program} = require('commander');
const chalk = require("chalk");
//const ncp = require('ncp');
//const execa = require('execa');
//const { promisify } = require('util');
const fs = require('fs');
var fse = require('fs-extra');
const {path, resolve} = require('path');
const {exec} = require("child_process");
const inquirer  = require('./lib/inquirer');
//const Listr = require('listr');

program
.command('start <dapp>')
.description('Start Adam BC DApp')
.action(startAdamBC);

program
.command('create <dapp>')
.description('Create Adam BC DApp')
.option("-f, --fs", "Indicates that this is a file-heavy data app.", {demandOption:false})
.option("-n, --numbers", "Indicates that this is an arithmetics-heavy app.", {demandOption:false})
.option("-m, --multimedia", "Indicates that this is an image or video rich app.", {demandOption:false})
.option("-p, --pdf", "Indicates that this is a PDF heavy app.", {demandOption:false})
.option("-py, --py", "Indicates that you are building a python app.", {demandOption:false})
.action(createDApp)

program
.command('delete <dapp>')
.description('Delete Adam BC DApp')
.action(deleteDApp);

async function createDApp(dapp,options) {

  const problem = chalk.red.bold(`Problem creating Adam BC DApp '${dapp}' ...!`);
  
  if (options.py) {

  if (options.numbers) {
    let start = chalk.cyan.bold(`Creating an Adam BC 'PDF' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/py/n');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  }
  else if (options.multimedia) {
    let start = chalk.cyan.bold(`Creating an Adam BC 'Multimedia' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/py/m');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  }
  else if (options.pdf) {
    let start = chalk.cyan.bold(`Creating an Adam BC 'PDF' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/py/p');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  }
  else {
    let start = chalk.cyan.bold(`Creating an Adam BC 'FS' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/py/f');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  
  }

  }

  else {

  if (options.numbers) {
    let start = chalk.cyan.bold(`Creating an Adam BC 'Numerics' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/js/n');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  }
  else if (options.multimedia) {
    let start = chalk.cyan.bold(`Creating an Adam BC 'Multimedia' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/js/m');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  }
  else if (options.pdf) {
    let start = chalk.cyan.bold(`Creating an Adam BC 'PDF' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/js/p');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  }
  else {
    let start = chalk.cyan.bold(`Creating an Adam BC 'FS' DApp ...!`);
    console.log(start);

    const src = resolve('./bin/templates/js/f');
    const dist = resolve(`./app/dapps/${dapp}`);

    copyRecursiveSync(src,dist);
  
  }

  }

  const starting = chalk.green.bold(`Creating Adam BC DApp '${dapp}' ...!`);
  const started = chalk.yellow.bold(`Adam BC DApp '${dapp}' created ...!`);

  console.log(starting);
  console.log(started)

}

async function startAdamBC(dapp) {
  const start = chalk.cyan.bold('Start Adam BC:');
  const starting = chalk.green.bold(`Starting Adam BC DApp '${dapp}' ...!`);
  const problem = chalk.red.bold(`Problem starting Adam BC DApp '${dapp}' ...!`);
  const started = chalk.yellow.bold('Adam BC DApp started successfully on Port 6553 ..!');
  const localURL = chalk.white.bold(`Open browser, visit http://localhost:6553/ and click 'Start' to run DApp.`);

  const src = resolve(`./app/dapps/${dapp}`);
  const dest = resolve(`./app`);
  
  const dir = resolve('./');

  function transferFileContent( source, target ) {
    fse.copy(source, target, function(err){
      if(err){
        console.log(problem);
        return;
      }
    });
  }

  try {
    transferFileContent( src, dest );
  } catch (err) {
    console.log(problem);
    return;
  }

  exec(`node app.js`, {cwd:dir}, (error, stdout, stderr) => {

    if(error){
        console.log(problem);
        return;
    }
    
    if(stderr){
        console.log(problem);
        return;
    }
    
  });

  console.log(start);
  console.log(starting);
  console.log(started);
  console.log(localURL);

  /*
  const tasks = new Listr([
    {
     title: 'Copy project files',
     task: () => copyRecursiveSync(src,dest),
    },
    {
      title: 'Starting DApp ...',
      task: () => initGit(),
    },
  ]);
 
  await tasks.run();
  */

}

async function deleteDApp(dapp) {
  const del = chalk.cyan.bold('Delete Adam BC DApp:');
  const deleting = chalk.green.bold(`Deleting Adam BC DApp '${dapp}' ...!`);
  const problem = chalk.red.bold(`Problem deleting Adam BC DApp '${dapp}' ...!`);
  const deletion = chalk.green.bold(`DApp '${dapp}' deletion cancelled ...!`);
  const deleted = chalk.yellow.bold('Adam BC DApp deleted!');

  const dappDir = resolve(`./app/dapps/${dapp}`);

  const answer = await inquirer.askToDelete();

  if(answer.answer===true){
    try {
      fs.rmSync(dappDir, {recursive:true});
      console.log(del);
      console.log(deleting);
      console.log(deleted);
    } catch (err) {
      console.log(problem);
    }
  } else {
    console.log(chalk.red.bold(deletion));
  }

}

var copyRecursiveSync = function(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(`${src}/${childItemName}`,
                        `${dest}/${childItemName}`);
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

program.parse();


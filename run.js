#!/usr/bin/env node
var shell = require('shelljs');

console.log("heoa");

shell.exec(__dirname + "/GithubAnalysis/shell/gitStatsAll.sh " + __dirname + "/GithubAnalysis/resources/valid/stats.txt");
console.log("2");

shell.cd(__dirname + "/GithubAnalysis/src");

console.log("3");

if (shell.exec('./main.js ' + process.argv.slice(2).join(" ")).code !== 0) {
  shell.echo('Error: analysis failed');
  shell.exit(1);
}

console.log("4");

shell.cd(__dirname);

shell.mv("./GithubAnalysis/resources/output/javaOut.json", "./viz_metro/input.json");
shell.cd(__dirname + "/viz_metro");
shell.exec('npm start');

console.log("5");
